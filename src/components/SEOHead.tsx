import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead = ({ 
  title = "ACE STAYZ - Premium Hotel Franchise & Property Management",
  description = "Transform your property into a profitable hospitality business with ACE STAYZ. Premium hotel franchise opportunities, professional management, and proven revenue growth strategies.",
  keywords = "hotel franchise, property management, hospitality business, hotel partnership, revenue growth, premium hotels, ACE STAYZ",
  image = "https://acestayz.com/ACE-STAYZ.png",
  type = "website"
}: SEOHeadProps) => {
  const location = useLocation();
  const currentUrl = `https://acestayz.com${location.pathname}`;

  useEffect(() => {
    // Update page title
    document.title = title;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'ACE STAYZ');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'ACE STAYZ', true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ACE STAYZ",
      "url": "https://acestayz.com",
      "logo": "https://acestayz.com/ACE-STAYZ.png",
      "description": description,
      "sameAs": [
        "https://www.facebook.com/acestayz",
        "https://www.instagram.com/acestayz",
        "https://www.linkedin.com/company/acestayz"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9403890926",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, currentUrl, type]);

  return null;
};

export default SEOHead;