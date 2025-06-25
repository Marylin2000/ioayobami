import React from "react";
import { motion } from "framer-motion";

const ResumeSection = () => {
  const projects = {
    matlab: [
      {
        title: "AI and IoT-Based Carbon Emission Forecasting",
        year: "2025",
        description:
          "Developed a MATLAB-based predictive system using machine learning and IoT data streams to forecast carbon emissions for environmental monitoring.",
      },
      {
        title: "Piezoelectricity System Modeling and Simulation",
        year: "2025",
        description:
          "Simulated energy harvesting systems using piezoelectric materials to evaluate efficiency under varying mechanical stress.",
      },
      {
        title: "Smart Grid Load Balancing System",
        year: "2025",
        description:
          "Modeled a demand-response energy balancing system using MATLAB for intelligent grid management.",
      },
      {
        title: "IoT-Based Home Automation Modeling and Simulation",
        year: "2025",
        description:
          "Simulated automation of home devices, integrating sensors and controllers, and validated using MATLAB/Simulink.",
      },
      {
        title: "Power Quality Events Classification in Smart Grids",
        year: "2025",
        description:
          "Developed algorithms to classify and detect disturbances in smart grids, supporting stable power delivery.",
      },
      {
        title: "Thermal Comfort in Passenger's Car Simulation",
        year: "2025",
        description:
          "Modeled and simulated the dynamic thermal behavior of car cabins exposed to varying ambient conditions.",
      },
      {
        title: "Solar Power Systems Simulation",
        year: "2022-Present",
        description:
          "Designed and analyzed standalone and grid-connected solar systems to optimize power output and energy storage.",
      },
      {
        title: "Economic Load Dispatcher",
        year: "2024",
        description:
          "Implemented an optimization algorithm for efficient allocation of generation loads in power plants.",
      },
    ],
    other: [
      {
        title: "Tomato Sorting Machine (Automation and Control)",
        description:
          "Designed and implemented a computer vision-based automated system that sorts tomatoes by size and ripeness using image processing algorithms and servo-controlled conveyor mechanisms, achieving 92% sorting accuracy.",
      },
      {
        title: "Visible Light Communication (VLC) System",
        description:
          "Developed a prototype Li-Fi system using LED lights to transmit data wirelessly, achieving stable transmission speeds of 15Mbps over 2-meter distances with error correction protocols.",
      },
      {
        title: "Electricity Meter with SMS Alerts",
        description:
          "Created a smart energy meter with GSM module that sends real-time consumption data and threshold alerts to users' mobile phones, featuring tamper detection and remote disconnection capabilities.",
      },
      {
        title: "Mobility Aids for the Visually Impaired",
        description:
          "Engineered an ultrasonic sensor-based navigation device with haptic feedback that detects obstacles up to 3 meters away, providing vibration intensity proportional to obstacle proximity.",
      },
      {
        title: "Accident Detection Systems",
        description:
          "Built an IoT-enabled vehicle collision detection system using MEMS accelerometers that automatically triggers emergency alerts with GPS coordinates to predefined contacts upon impact detection.",
      },
      {
        title: "Hydroponic Farming Automation",
        description:
          "Implemented a fully automated hydroponic control system monitoring pH, nutrient levels, and water temperature with automated dosing pumps, increasing crop yield by 30% compared to manual systems.",
      },
      {
        title: "Thermoelectric Energy Generation System",
        description:
          "Designed a waste heat recovery system converting temperature differentials into electrical energy using Peltier modules, generating 5W continuous power from 60°C+ heat sources.",
      },
      {
        title: "Incubator Design with 95% Hatching Efficiency",
        description:
          "Developed a microcontroller-based poultry egg incubator with precise temperature (±0.2°C) and humidity (±2%) control, automatic turning mechanism, and real-time monitoring via mobile app.",
      },
      {
        title: "Solar Power Installations",
        description:
          "Designed and deployed multiple off-grid solar systems ranging from 500W to 5kW capacity, incorporating MPPT charge controllers, lithium-ion battery banks, and smart load management.",
      },
      {
        title: "GPS-Based Car Tracking Systems",
        description:
          "Created a vehicle tracking solution with real-time location monitoring, geofencing alerts, and movement history logging using GPS/GSM modules with 10-meter positional accuracy.",
      },
      {
        title: "Digital Display Systems using P10 LED Boards",
        description:
          "Engineered programmable LED matrix displays with wireless content updates, supporting animations, real-time data feeds (weather/stocks), and scheduled messaging for public information systems.",
      },
    ],
  };

  const contactLinks = [
    {
      name: "Download Full CV",
      url: "https://flowcv.com/resume/ih2kq6e7h6",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn Profile",
      url: "https://www.linkedin.com/in/engr-i-o-ayobami-b3815a245",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Facebook Profile",
      url: "https://www.facebook.com/share/199syk2W6t/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
        </svg>
      ),
    },
    {
      name: "Instagram Profile",
      url: "https://www.instagram.com/engrioayobami",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="resume" className="py-10 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2 sm:text-3xl">
            Professional Experience
          </h2>
          <p className="text-blue-600 sm:text-lg">
            MATLAB and Engineering Project Portfolio
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm p-5 mb-8"
        >
          <p className="text-gray-700">
            I am a skilled MATLAB programmer with strong expertise in solving
            real-world engineering problems. My work focuses on modeling,
            simulation, and optimization in mechanical, electrical, control, and
            embedded systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* MATLAB Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-blue-600 p-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 sm:text-xl">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  MATLAB Projects
                </h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  {projects.matlab.map((project, i) => (
                    <div key={i} className="border-l-2 border-blue-500 pl-3 py-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <h4 className="font-semibold text-gray-800 sm:text-base">
                          {project.title}
                        </h4>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mt-1 sm:mt-0 sm:ml-2">
                          {project.year}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-gray-600">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Engineering Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-green-600 p-3">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2 sm:text-xl">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    Engineering Projects
                  </h3>
                </div>
                <div className="p-4">
                  <div className="space-y-4">
                    {projects.other.map((project, i) => (
                      <div key={i} className="border-l-2 border-green-500 pl-3 py-2">
                        <h4 className="font-semibold text-gray-800 sm:text-base">
                          {project.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-sm p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2 sm:text-xl">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Professional Profiles
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {contactLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors border border-gray-200 text-sm sm:text-base"
                    >
                      <span className="bg-white p-1.5 rounded-full shadow-xs">
                        {link.icon}
                      </span>
                      <span className="font-medium text-gray-700 truncate">
                        {link.name}
                      </span>
                      <svg
                        className="ml-auto w-4 h-4 text-gray-400 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;