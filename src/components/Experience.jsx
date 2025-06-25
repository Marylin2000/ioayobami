import React from "react";
import { experienceData as experience } from "../constants";
const ExperienceCard = ({experience}) => {
  return (
    <div className="experience-card bg-white shadow-lg rounded-lg p-6 md:flex md:items-start">
      <div className="timeline-date mb-4 md:mb-0 md:mr-8 text-blue-600 font-semibold text-lg md:w-1/4">
        {experience.date}
      </div>
      <div className="experience-details md:w-3/4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {experience.position}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <div className="experience bg-gray-50 py-12" id="experience">
      <div className="container mx-auto px-4">
        <div className="section-header text-center mb-12">
          <p className="text-blue-600 font-semibold">{experience.subtitle}</p>
          <h2 className="text-3xl font-bold">{experience.title}</h2>
        </div>
        <div className="experience-list space-y-8">
          {experience.experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;