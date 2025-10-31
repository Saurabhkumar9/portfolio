import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Saurabhkumar9" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/saurabh-kumar-yadav-7368252b7" },
    { icon: <FaTwitter />, url: "https://twitter.com/saurabhyadav356" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute right-1/4 bottom-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          {/* Title with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-indigo-400">Saurabh Kumar</span>
            </h2>
            <h1 className="text-2xl font-semibold tracking-wider text-[#07deb6] uppercase pt-4">
              Full Stack Developer
            </h1>
          </motion.div>

          {/* Description with animation */}
          <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="mt-6 max-w-2xl mx-auto text-center space-y-4"
>
  <p className="text-xl text-gray-200 leading-relaxed">
    A passionate <span className="text-indigo-400 font-semibold">Full Stack Developer</span> 
    skilled in creating secure, scalable, and user-friendly web applications.
  </p>
  {/* <p className="text-xl text-gray-300 leading-relaxed">
    Proficient in <span className="text-indigo-400 font-semibold">React.js, Node.js, Express.js,</span> 
    and <span className="text-indigo-400 font-semibold">MongoDB</span>, with hands-on experience 
    in both frontend and backend development.
  </p> */}
</motion.div>


  <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-lg mx-auto text-lg text-gray-300"
          ></motion.p>
          {/* Buttons with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 text-white font-medium rounded-md border border-indigo-400 hover:bg-indigo-900/30 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          {/* Social links with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex justify-center space-x-6"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 text-xl transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;