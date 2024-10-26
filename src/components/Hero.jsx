import React from "react";
import image from "../assets/images/hero.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="bg-hero h-[60vh]" id="home">
      
        <div className=" flex items-center px-10 justify-between ">
          <div className=" w-1/2">
            <div className="hero-content">
              <div className=" w-full ">
                <p className="font-bold text-white text-2xl ">I'm</p>
                <h1 className=" font-bold md:text-5xl text-3xl text-white">AYOBAMI ISMAIL OPEYEMI</h1>
                <h2></h2>
                <TypeAnimation
                  sequence={[
                    "PROGRAMMER",
                    "EMBEDDED SYSTEM ENGINEER",
                    "RENEWABLE ENERGY ENGINEER",
                  ]}
                  wrapper="span"
                  speed={1}
                  style={{
                    fontSize: "1.8em",
                    display: "inline-block",
                    color: "white",
                    marginTop: "10px",
                    marginBottom: "30px",
                    fontWeight:"bold",
                    width:"100vw"
                  }}
                  repeat={Infinity}
                />
                <div className="typed-text"></div>
              </div>
              <div className="">
                <a className="btn" href="#contact">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 d-none d-md-block">
            <div className="hidden lg:block">
              <img src={image} alt="Hero Image" />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Hero;
