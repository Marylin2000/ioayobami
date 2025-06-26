import React from "react";
import { motion } from "framer-motion";

// Custom MATLAB SVG Icon
const MatlabIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8">
    <linearGradient id="matlab-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#FF9900" />
      <stop offset="100%" stopColor="#FF6600" />
    </linearGradient>
    <path 
      fill="url(#matlab-gradient)" 
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5v-4l-3-1.5v4l3 1.5zm5.5-1.5L14 14v3l2.5-1zM16 9l-4-2-4 2-1-2 5-3 5 3-1 2z"
    />
    <path 
      fill="#fff" 
      d="M12 6.5l-5 3v3l5-3v-3zm1 7v3l5-3v-3l-5 3z"
    />
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      title: "MATLAB",
      icon: <MatlabIcon />,
      description: "Specialize in teaching MATLAB for engineering applications including system modeling, simulation, control systems, and data analysis.",
      highlights: [
        "System modeling & simulation",
        "Control systems design",
        "Data visualization",
        "Algorithm development"
      ]
    },
    {
      title: "Embedded Systems",
      icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#3B82F6"><path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6zm5 2H6v8h3V8zm5 0h-3v8h3V8z"/></svg>,
      description: "Excels  in embedded systems development, microcontroller programming, and real-world project implementation.",
      highlights: [
        "Microcontroller programming",
        "Machine Learning",
        "Sensor integration",
        "Firmware development"
      ]
    },
    {
      title: "Renewable Energy",
      icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#F59E0B"><path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>,
      description: "An expert solar system design, energy harvesting techniques, and sustainable power solutions.",
      highlights: [
        "Solar installation",
        "Inverter design",
        "Energy harvesting",
        "Piezo-electricity",
        "Thermo-electricity"
      ]
    }
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="service" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Expert Services</h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Combining theoretical knowledge with practical implementation for real engineering solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={itemVariants}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-8">
                <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-lg bg-opacity-10 bg-current text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.highlights.map((highlight, j) => (
                    <li key={j} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;