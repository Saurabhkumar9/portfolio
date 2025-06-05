import React from 'react'
import { assets } from '../assets/assets';

const Certificates = () => {
  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "Web Development intern",
      issuer: "1 month",
      date: "August-September ",
      imageUrl: `${assets.cer}`
    },
    {
      id: 2,
      title: "Technology Job Simulation",
      // issuer: "Coursera",
      date: "May 24th 2025",
      imageUrl: `${assets.cer2}`
    },
    {
      id: 3,
      title: "JavaScript (kg coding)",
      issuer: "Youtube",
      date: "September 5 2024",
      imageUrl: `${assets.javaScript}`
    },
    {
      id: 4,
      title: "HTML",
      issuer: "Youtube",
      date: "July 13 2024",
      imageUrl: `${assets.html}`
    }
  ];

  return (
    <div className="bg-[#020617] py-10 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">My Certifications</h2>
        
        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-[#0f172a] rounded-xl overflow-hidden shadow-lg border border-[#1e293b] hover:border-teal-400 transition-all duration-300 hover:shadow-teal-500/10 hover:scale-[1.02] group"
            >
              {/* Certificate Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={cert.imageUrl} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Certificate Details */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-teal-400 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-xs">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;