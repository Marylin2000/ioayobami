import React from "react";
import {
  FaChevronUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#353daf] text-white py-8">
      {/* Footer Content */}
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col items-center space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white">AYOBAMI ISMAIL OPEYEMI</h2>
          <p className="text-sm text-white">Yelwa Tudu, Bauchi, Bauchi State, Nigeria</p>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-2">
          <p className="text-base font-medium text-white">+234 8162 248 066</p>
          <p className="text-base font-medium text-white">ayobamiismail1111@gmail.com</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center text-white">
          <a
            href="https://x.com/AYOBAMIISMAIL7?t=XL6keJU9QHjUL4p7Q5r0yw&s=09"
            className="text-white"
          >
            <FaTwitter size={28} />
          </a>
          <a
            href="https://wa.me/qr/FSEI3CAGGVUHH1"
            className="text-white"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://www.facebook.com/ismaeel.ayobami.14"
            className="text-white"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://youtube.com/@ayobamiismail4489?si=7WFbzGtdpnjVn53I"
            className="text-white"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://instagram.com/hizmoney01?igshid=OGQ5ZDc2ODk2ZA=="
            className="text-white"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayobami-ismail-b3815a245"
            className="text-white"
          >
            <FaLinkedin size={28} />
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrolltoTop}
          className="flex items-center text-sm font-semibold bg-white text-[#353daf] py-2 px-4 rounded-md shadow-lg hover:bg-gray-200 transition duration-300"
        >
          <FaChevronUp className="mr-2" /> Back to Top
        </button>

        {/* Copyright */}
        <div className="text-center text-sm text-white">
          &copy; {new Date().getFullYear()}{" "}
          <a href="#" className="text-white">
            I.O. AYOBAMI
          </a>
          , All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
