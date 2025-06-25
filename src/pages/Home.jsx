import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import PortfolioTabs from "../components/Tabs.jsx";
import AboutSection from "../components/About.jsx";
import ServicesSection from "../components/Services.jsx";
import ExperienceSection from "../components/Experience.jsx";
import ResumeSection from "../components/Resume.jsx";

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
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <div>
        <div className="flex items-center flex-col justify-center py-4">
          <div className="items-center flex gap-3">
            <div className="bg-blue-700 h-[2px] w-[40px]"></div>
            <p className="text-blue-600 font-bold">My Portfolio</p>
          </div>
          <p className="text-4xl font-bold text-blue-600">
            My Excellent Portfolio
          </p>
        </div>

        <PortfolioTabs />
      </div>
      <ResumeSection />

      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
