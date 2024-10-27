import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5"; // Icon for close button

const links = [
  { href: "/", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#service", text: "Service" },
  { href: "#experience", text: "Experience" },
  { href: "#portfolio", text: "Portfolio" },
  { href: "#review", text: "Review" },
  { href: "#contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
];

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleScroll() {
      setIsScrolling(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-20 shadow-lg w-full">
      <div
        className={`flex justify-between items-center px-6 md:px-10 ${
          isScrolling ? "bg-white transition-all duration-150" : ""
        } bg-[#353daf] h-[10vh]`}
      >
        <a
          href="/"
          className={`${
            isScrolling ? "text-[#353daf]" : "text-white"
          } font-bold text-2xl whitespace-nowrap overflow-hidden max-w-[80%]`}
        >
          I.O.AYOBAMI
        </a>
        <button
          onClick={toggleSidebar}
          className={`sm:hidden ${
            isScrolling ? "text-[#353daf]" : "text-white"
          }`}
        >
          <HiMenuAlt1 size={25} />
        </button>

        <div className="hidden md:flex justify-around">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className={`mx-5 ${
                isScrolling ? "text-[#353daf] font-bold" : "text-white font-bold"
              }`}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-700"
        >
          <IoClose size={24} />
        </button>
        <nav className="flex flex-col items-start p-6 space-y-4">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              onClick={toggleSidebar} // Close sidebar on link click
              className="text-gray-800 text-lg font-semibold hover:text-[#353daf]"
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
