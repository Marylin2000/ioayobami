import React, { useState } from "react";
import image from "../assets/images/contact.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjects, setSubject] = useState("");

  return (
    <div className="bg-[#353daf] w-full my-2 py-16 h-auto " id="contact">
      <form className="grid md:grid-cols-2 gap-10 px-8">
        {/* Image section */}
        <div className="w-full h-full">
          <img
            src={image}
            alt="Contact"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Form section */}
        <div className="flex flex-col justify-around space-y-4 text-white">
          <div className="space-y-4">
            <input
              type="text"
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-indigo-300 placeholder:text-slate-400 w-full py-2"
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-indigo-300 placeholder:text-slate-400 w-full py-2"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="bg-transparent border-b-2 border-white focus:outline-none focus:border-indigo-300 placeholder:text-slate-400 w-full py-2"
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              placeholder="Subject"
              required
            />
          </div>
          
          <div className="space-y-4">
            <textarea
              className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-indigo-300 placeholder:text-slate-400 h-24 resize-none py-2"
              id="message"
              name="message"
              placeholder="Message"
              required
            ></textarea>
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
