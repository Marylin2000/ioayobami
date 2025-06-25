import React from "react";
import { aboutData } from "../constants";

const AboutSection = () => {
  return (
    <div className="about wow fadeInUp" data-wow-delay="0.1s" id="about">
      <div className="flex flex-wrap justify-center my-24 w-full px-4 md:px-8 lg:px-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={aboutData.image}
            alt="About"
            className="rounded-md max-w-full h-auto shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-5 text-left">
          <div className="section-header mb-4">
            <p className="text-lg font-medium text-blue-600">
              {aboutData.subtitle}
            </p>
            <h2 className="text-2xl font-bold">{aboutData.title}</h2>
          </div>
          <div className="about-text mb-6">
            <p className="text-base leading-relaxed">{aboutData.description}</p>
          </div>
          <div className="skills mb-6 space-y-4">
            {aboutData.skills.map((skill, index) => (
              <div key={index} className="skill-item p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${skill.color}`}></div>
                  <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1 pl-5">
                  {skill.details.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a
            className="btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            href={aboutData.link}
          >
            {aboutData.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;