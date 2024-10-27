import React from "react";
import image from "../assets/images/hero.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="bg-hero justify-center   flex items-center" id="home">
      <div className="flex items-center px-10 justify-between w-full">
        {/* Left content */}
        <div className="w-full lg:w-1/2">
          <div className="hero-content">
            <div className="w-full">
              <p className="font-bold text-white text-2xl">I'm</p>
              <h1 className="font-bold md:text-5xl text-3xl text-white">
                AYOBAMI ISMAIL OPEYEMI
              </h1>
              <TypeAnimation
                sequence={[
                  "PROGRAMMER",
                  "EMBEDDED SYSTEM ENGINEER",
                  "RENEWABLE ENERGY ENGINEER",
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "1.8em",
                  display: "inline-block",
                  color: "white",
                  marginTop: "10px",
                  marginBottom: "30px",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
              />
            </div>
            <div className="mt-5">
              <a className="btn text-white font-semibold py-2 px-4 rounded-md bg-[#353daf] hover:bg-[#2c3091]" href="#contact">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={image}
            alt="Hero"
            className="w-full h-auto max-w-xs lg:max-w-md xl:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
