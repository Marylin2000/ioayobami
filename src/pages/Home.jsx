import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { portfolioItems } from "../constants/images";
import Hero from "../components/Hero";
import { testimonials } from "../constants/testimonial";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import aboutImage from "../assets/images/about.jpg";

const Home = () => {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="relative h-full w-full bg-white text-gray-900">
      <Hero />
      <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
        <div className="flex flex-wrap justify-center my-24 w-full px-4 md:px-8 lg:px-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src={aboutImage}
              alt="Image"
              className="rounded-md max-w-full h-auto shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-5 text-left">
            <div className="section-header mb-4">
              <p className="text-lg font-medium text-blue-600">Learn About Me</p>
              <h2 className="text-2xl font-bold">4 Years Experience</h2>
            </div>
            <div className="about-text mb-6">
              <p className="text-base leading-relaxed">
                Ismail is a first-class graduate of Mechatronics and System
                Engineering from ATBU. He is skilled in embedded systems,
                renewable energy, and programming. He has completed professional
                presentation and soft skills training at America Space.
              </p>
            </div>
            <div className="skills mb-6">
              <div className="skill-name flex justify-between items-center mb-2">
                <p className="text-base text-gray-800">PROGRAMMING</p>
                <p className="text-base text-gray-800">99%</p>
              </div>
              <div className="progress h-2 bg-gray-200 rounded-full mb-4">
                <div className="progress-bar bg-blue-600 h-full w-[99%] rounded-full"></div>
              </div>

              <div className="skill-name flex justify-between items-center mb-2">
                <p className="text-base text-gray-800">EMBEDDED SYSTEM</p>
                <p className="text-base text-gray-800">97%</p>
              </div>
              <div className="progress h-2 bg-gray-200 rounded-full mb-4">
                <div className="progress-bar bg-green-600 h-full w-[97%] rounded-full"></div>
              </div>

              <div className="skill-name flex justify-between items-center mb-2">
                <p className="text-base text-gray-800">RENEWABLE ENERGY</p>
                <p className="text-base text-gray-800">96%</p>
              </div>
              <div className="progress h-2 bg-gray-200 rounded-full mb-4">
                <div className="progress-bar bg-yellow-600 h-full w-[96%] rounded-full"></div>
              </div>
            </div>
            <a
              className="btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              href="#experience"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="service" id="service">
        <div className="container mx-auto py-12">
          <div className="section-header text-center mb-12">
            <p className="text-blue-600 font-semibold">What I Do</p>
            <h2 className="text-3xl font-bold">Awesome Quality Services</h2>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="service-item max-w-sm p-6 m-4 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Programming
              </h3>
              <p>
                I excel in programming languages such as C, C++, Python, and
                MATLAB. I use C and C++ for embedded systems, MATLAB for
                simulations, and Python for machine learning applications.
              </p>
            </div>
            <div className="service-item max-w-sm p-6 m-4 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-green-600">
                Embedded Systems
              </h3>
              <p>
                I am an embedded systems engineer with expertise in firmware
                development, optimizing embedded devices, and ensuring their
                seamless operation.
              </p>
            </div>
            <div className="service-item max-w-sm p-6 m-4 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">
                Renewable Energy
              </h3>
              <p>
                I specialize in designing inverters, solar installations, and
                harnessing sustainable energy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="experience bg-gray-50 py-12" id="experience">
  <div className="container mx-auto px-4">
    <div className="section-header text-center mb-12">
      <p className="text-blue-600 font-semibold">My Resume</p>
      <h2 className="text-3xl font-bold">Working Experience</h2>
    </div>
    <div className="experience-list space-y-8">
      <div className="experience-card bg-white shadow-lg rounded-lg p-6 md:flex md:items-start">
        <div className="timeline-date mb-4 md:mb-0 md:mr-8 text-blue-600 font-semibold text-lg md:w-1/4">
          2021 - Present
        </div>
        <div className="experience-details md:w-3/4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Instructor - Nascomsoft Embedded Hub, Bauchi
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Instructed students in MATLAB simulation, embedded systems, inverter construction, and solar installation. Guided hands-on projects to reinforce practical skills.
          </p>
        </div>
      </div>
      <div className="experience-card bg-white shadow-lg rounded-lg p-6 md:flex md:items-start">
        <div className="timeline-date mb-4 md:mb-0 md:mr-8 text-blue-600 font-semibold text-lg md:w-1/4">
          2021 - Present
        </div>
        <div className="experience-details md:w-3/4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Engineering Projects - Nascomsoft Embedded Hub
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Worked on engineering projects, including VLC systems, accident detection, renewable energy solutions, and control system modeling, driving innovation in embedded technology.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


      <div className="grid md:grid-cols-3 mx-3 gap-5 lg:grid-cols-4 p-4" id="portfolio2">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} portfolio={item} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row overflow-x-scroll py-4">
        {testimonials.map((data, index) => (
          <TestimonialCard key={index} data={data} />
        ))}
      </div>

      <Contact  />
      <Footer />
    </main>
  );
};

export default Home;
