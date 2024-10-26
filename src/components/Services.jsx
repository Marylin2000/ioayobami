import React from 'react'

function Services() {
  return (
    
  
    <div className="service" id="service">
        <div className="container">
            <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                <p>What I do</p>
                <h2>Awesome Quality Services</h2>
            </div>
            <div className="row">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                    <div className="service-text">
                        <h3>
                            <span><i className="fa fa-laptop"></i> PROGRAMMING</span>
                        </h3>
                        <p>
                            I excel in programming languages such as C, C++, Python, and MATLAB. I leverage my
                            proficiency in C and C++ for embedded system development, utilize MATLAB for industrial
                            simulations and modeling, and harness Python for machine learning applications.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="service-text">
                        <h3>
                            <span><i className="fas fa-robot"></i> EMBEDDED SYSTEM</span>
                        </h3>
                        <p>
                            I am an embedded systems engineer with proficiency in C, C++, Python, and MATLAB. My
                            expertise includes microcontroller and microprocessor applications, discrete system
                            design and PCB. I excel in firmware development, optimizing embedded
                            devices, and ensuring their seamless operation, bridging the gap between hardware and
                            software.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="service-text">
                        <h3>
                            <span><i className="fas fa-solar-panel"></i> RENEWABLE ENERGY</span>
                        </h3>
                        <p>
                            I specialize in renewable energy engineering, excelling in the design of inverters,
                            solar installation, and harnessing piezoelectric and thermoelectric energy sources. My
                            expertise lies in developing sustainable energy solutions that leverage these
                            technologies, contributing to a cleaner and more efficient energy landscape.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services