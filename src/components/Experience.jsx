import React from "react";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="container">
        <header
          className="section-header text-center wow zoomIn"
          data-wow-delay="0.1s"
        >
          <p>My Resume</p>
          <h2>Working Experience</h2>
        </header>
        <div className="timeline">
          <div
            className="timeline-item left wow slideInLeft"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">2021 - date</div>
              <h2>INSTRUCTOR</h2>
              <h4>Nascomsoft embedded hub, Bauchi </h4>
              <p>
                Ismail is an instructor at Nascomsoft Embedded Hub, guiding
                students in MATLAB simulation, C and C++ programming, embedded
                systems, inverter construction, and solar system installation.
                His focus is on building a solid understanding of programming
                fundamentals, system components, and practical hands-on skills.
                Through comprehensive instruction, he empowers students to work
                effectively with microcontrollers, design systems, and implement
                renewable energy solutions.
              </p>
            </div>
          </div>
          <div
            className="timeline-item right wow slideInRight"
            data-wow-delay="0.1s"
          >
            <div className="timeline-text">
              <div className="timeline-date">2021-DATE</div>
              <h2>ENGINEERING PROJECTS</h2>
              <h4>Nascomsoft embedded hub, Bauchi </h4>
              <p>
                Ismail has worked on numerous engineering projects, including a
                tomato sorting machine, visible light communication (VLC)
                system, electricity meter with SMS alerts, mobility aids for the
                visually impaired, and accident detection systems. He has
                contributed to creating a hydroponic system, thermoelectric
                energy generation, and an incubator with 95% hatching
                efficiency. Additionally, he has implemented solar power
                systems, car trackers, and display systems using P10 boards.
                These projects highlight his expertise in embedded systems,
                renewable energy, and automation, addressing various industrial
                and societal challenges. Ismail's engineering projects also
                include MATLAB-based work, such as the economic load dispatcher
                and the modeling and simulation of a stepper motor. These
                projects demonstrate his expertise in optimization techniques
                and control system analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
