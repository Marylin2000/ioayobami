import aboutImage  from "../assets/images/about.jpg"
export const experienceData = {
    subtitle: "My Resume",
    title: "Working Experience",
    experiences: [
      {
        date: "2021 - Present",
        position: "Instructor - Nascomsoft Embedded Hub, Bauchi",
        description: "Ismail is an instructor at Nascomsoft Embedded Hub, guiding students in MATLAB simulation, C and C++ programming, embedded systems, inverter construction, and solar system installation. His focus is on building a solid understanding of programming fundamentals, system components, and practical hands-on skills. Through comprehensive instruction, he empowers students to work effectively with microcontrollers, design systems, and implement renewable energy solutions."
      },
      {
        date: "2021 - Present",
        position: "Engineering Projects - Nascomsoft Embedded Hub",
        description: "Ismail has worked on numerous engineering projects, including a tomato sorting machine, visible light communication (VLC) system, electricity meter with SMS alerts, mobility aids for the visually impaired, and accident detection systems. He has contributed to creating a hydroponic system, thermoelectric energy generation, and an incubator with 95% hatching efficiency. Additionally, he has implemented solar power systems, car trackers, and display systems using P10 boards. These projects highlight his expertise in embedded systems, renewable energy, and automation, addressing various industrial and societal challenges. Ismail's engineering projects also include MATLAB-based work, such as the economic load dispatcher and the modeling and simulation of a stepper motor. These projects demonstrate his expertise in optimization techniques and control system analysis."
      }
    ]
  };

  export const servicesData = {
    subtitle: "What I Do",
    title: "Awesome Quality Services",
    services: [
      {
        title: "Programming",
        color: "text-blue-600",
        description: "I excel in programming languages such as C, C++, Python, and MATLAB. I use C and C++ for embedded systems, MATLAB for simulations, and Python for machine learning applications."
      },
      {
        title: "Embedded Systems",
        color: "text-green-600",
        description: "I am an embedded systems engineer with proficiency in C, C++, Python, and MATLAB. My expertise includes microcontroller and microprocessor applications, discrete system design and PCB. I excel in firmware development, optimizing embedded devices, and ensuring their seamless operation, bridging the gap between hardware and software."
      },
      {
        title: "Renewable Energy",
        color: "text-yellow-600",
        description: "I specialize in renewable energy engineering, excelling in the design of inverters, solar installation, and harnessing piezoelectric and thermoelectric energy sources. My expertise lies in developing sustainable energy solutions that leverage these technologies, contributing to a cleaner and more efficient energy landscape."
      }
    ]
  };
  
  const aboutData = {
    image: aboutImage,
    subtitle: "Learn About Me",
    title: "4 Years Experience",
    description: "Ismail is a first-class graduate of Mechatronics and System Engineering from ATBU. He is skilled in embedded systems, renewable energy, and MATLAB. He has completed professional presentation and soft skills training at America Space.",
    skills: [
      {
        name: "MATLAB",
        color: "bg-blue-600",
        details: [
          "Advanced simulation and modeling",
          "Control system design and analysis",
          "Data processing and visualization",
          "Algorithm development"
        ]
      },
      {
        name: "Embedded Systems",
        color: "bg-green-600",
        details: [
          "Microcontroller programming (Arduino, STM32)",
          "PCB design and prototyping",
          "Sensor integration and IoT solutions",
          "Firmware development"
        ]
      },
      {
        name: "Renewable Energy",
        color: "bg-yellow-600",
        details: [
          "Solar system design and installation",
          "Energy harvesting techniques",
          "Power electronics and inverter design",
          "Sustainable energy solutions"
        ]
      }
    ],
    buttonText: "View My Projects",
    link: "#portfolio"
  };
  
  export { aboutData };