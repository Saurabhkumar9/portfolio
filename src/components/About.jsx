import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute right-1/4 bottom-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute left-1/2 top-1/2 w-80 h-80 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-20">
        <div className="">
          {/* Title with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="flex items-center gap-2 text-md font-semibold tracking-wider text-[#07deb6] uppercase">
              About Me
              <span className=" h-px w-6  bg-white"></span>
            </h1>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Let Me <span className="text-blue-500">Introduce</span>{" "}
              <span className="text-white"> Myself</span>
            </h2>
          </motion.div>
        </div>
        <div>
          {/* Buttons with animation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-10">
            {/* Image Section with Enhanced Effects */}
            <div className="relative w-full sm:w-1/2 flex justify-center pt-10">
              {/* Floating Tech Icons Around Image */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -left-4 top-10 bg-indigo-500/20 p-3 rounded-full border border-indigo-400/30"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
                     className="w-8 h-8" 
                     alt="React" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute -right-4 bottom-20 bg-blue-500/20 p-3 rounded-full border border-blue-400/30"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                     className="w-8 h-8" 
                     alt="Node.js" />
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute right-10 top-0 bg-green-500/20 p-3 rounded-full border border-green-400/30"
              >
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
                     className="w-8 h-8" 
                     alt="MongoDB" />
              </motion.div>
              
              {/* Main Profile Image with Glow Effect */}
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  {/* Decorative Border Elements */}
                  <div className="absolute -inset-4 rounded-full border-2 border-teal-400/30 animate-spin-slow pointer-events-none"></div>
                  <div className="absolute -inset-2 rounded-full border border-white/10 pointer-events-none"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 pointer-events-none"></div>
                  
                  <img
                    src={assets.img}
                    alt="Saurabh Kumar"
                    className="relative z-10 w-60 h-60 object-cover rounded-full border-4 border-gray-800 shadow-xl hover:border-teal-400 transition-all duration-300"
                  />
                </motion.div>
                
                {/* Floating Dots Pattern */}
                <div className="absolute -z-10 inset-0 overflow-hidden rounded-full">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-white rounded-full"
                      style={{
                        width: Math.random() * 5 + 2 + 'px',
                        height: Math.random() * 5 + 2 + 'px',
                        top: Math.random() * 100 + '%',
                        left: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.3 + 0.1
                      }}
                      animate={{
                        y: [0, (Math.random() - 0.5) * 20],
                        x: [0, (Math.random() - 0.5) * 20],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full sm:w-1/2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 max-w-lg mx-auto text-3xl font-bold p-4 text-[#07deb6]"
              >
                Full Stack Developer
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col items-center sm:items-start text-center sm:text-left gap-6 text-gray-300"
              >
                <div>
                  Hello! I'm <strong>Saurabh Kumar</strong>, a passionate Full
                  Stack Developer with expertise in building modern web
                  applications using technologies like React.js, Node.js,
                  Express.js, and MongoDB.
                </div>
                <div>
                  I have successfully completed my B.Tech in Computer Science and
                  Engineering from{" "}
                  <strong>Khwaja Moinuddin Chishti Language University</strong>,
                  Lucknow, with a current SGPA of <strong>8.33</strong>.
                </div>

                <div className="flex flex-col sm:flex-row justify-between gap-4 text-white">
                  {/* Left Column */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <FaUserGraduate className="text-cyan-400 text-2xl" />
                      <span>B.Tech in CSE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt className="text-cyan-400 text-2xl" />
                      <span>+91-9004883379</span>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <MdEmail className="text-cyan-400 text-2xl" />
                      <span>saurabhkumarycse@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaLocationDot className="text-cyan-400 text-2xl" />
                      <span>Jaunpur, India</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;