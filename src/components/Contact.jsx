import React, { useState } from "react";
import image from "../assets/images/contact.jpg";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 w-full py-16 md:py-20" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-300 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Drop us a message and we'll get back to you.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 md:gap-12 bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl p-6 md:p-8 border border-slate-700/50"
        >
          {/* Image section */}
          <div className="hidden md:block relative rounded-xl overflow-hidden transform hover:scale-[1.02] transition duration-500">
            <img
              src={image}
              alt="Contact us"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply" />
          </div>

          {/* Form section */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-slate-500/50 focus:border-slate-300 focus:ring-0 px-0 py-3 text-white placeholder-slate-400 transition duration-300 outline-none"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
                  placeholder="Your Name"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-300 transition-all duration-300 group-focus-within:w-full"></span>
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  className="w-full bg-transparent border-0 border-b border-slate-500/50 focus:border-slate-300 focus:ring-0 px-0 py-3 text-white placeholder-slate-400 transition duration-300 outline-none"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  placeholder="Email Address"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-300 transition-all duration-300 group-focus-within:w-full"></span>
              </div>
              
              <div className="relative group">
                <input
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-slate-500/50 focus:border-slate-300 focus:ring-0 px-0 py-3 text-white placeholder-slate-400 transition duration-300 outline-none"
                  onChange={handleChange}
                  name="subject"
                  value={formData.subject}
                  placeholder="Subject"
                  required
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-300 transition-all duration-300 group-focus-within:w-full"></span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="relative group">
                <textarea
                  className="w-full bg-transparent border-0 border-b border-slate-500/50 focus:border-slate-300 focus:ring-0 px-0 py-3 text-white placeholder-slate-400 resize-none transition duration-300 outline-none"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-slate-300 transition-all duration-300 group-focus-within:w-full"></span>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-6 rounded-lg shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Send Message
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;