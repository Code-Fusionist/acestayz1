import React from "react";

const BloomerBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Yellow curved background */}
      <div
        className="absolute top-0 right-0 h-full w-[75%] bg-[#FEC11E] z-0"
        style={{
          clipPath: "ellipse(120% 100% at 100% 50%)",
        }}
      ></div>

      {/* Optional pattern layer */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/dtHRSL6r/bg-icons.png')", // Optional icon pattern
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://images.indianexpress.com/2024/02/Kriti-Sanon-2-1.jpg?w=640"
            alt="Kriti Sanon"
            className="w-[280px] md:w-[380px] lg:w-[420px] rounded-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
            Kriti Sanon
          </h1>
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-white drop-shadow-sm">
            is now a Bloomer
          </p>
        </div>
      </div>
    </div>
  );
};

export default BloomerBanner;
