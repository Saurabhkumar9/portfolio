import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-teal-400" />,
      title: "Email",
      value: "saurabhkumarycse@gmail.com",
      link: "mailto:saurabhkumarycse@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl text-teal-400" />,
      title: "Phone",
      value: "+91-9004883379",
      link: "tel:+919004883379"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-teal-400" />,
      title: "Location",
      value: "Jaunpur, Uttar Pradesh - 222170, India",
      link: "https://maps.google.com/?q=Jaunpur,Uttar+Pradesh,India"
    }
  ];

  const socialMedia = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      link: "https://www.linkedin.com/in/saurabh-kumar-yadav-7368252b7",
      name: "LinkedIn"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      link: "https://github.com/Saurabhkumar9",
      name: "GitHub"
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      link: "https://twitter.com/saurabhyadav356",
      name: "Twitter"
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      link: "https://www.instagram.com/saurabhkumaryadav356",
      name: "Instagram"
    }
  ];

  return (
    <div className="bg-[#020617] py-10 px-5 min-h-screen" id='contact'>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Get In Touch</h2>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0f172a] p-6 rounded-xl border border-[#1e293b] hover:border-teal-400 transition-all duration-300 hover:shadow-teal-500/10 hover:scale-[1.02] group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-gray-300">{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-5">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0f172a] p-4 rounded-full border border-[#1e293b] hover:border-teal-400 text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;