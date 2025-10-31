import React from 'react';

const Education = () => {
  const data = [
    {
      title: "Web Development Intern",
      subtitle: "Octanet Services Pvt Ltd, Lucknow",
      date: "August 2024 - September 2024",
      details: [
        "Developed a To-Do List App E-Commerce Website using HTML, CSS, and JavaScript.",
        "Integrated APIs and optimized UI responsiveness, reducing load time by 20%.",
        "Collaborated with teams to debug and enhance front-end features."
      ]
    },
    {
      title: "B.Tech in Computer Science",
      subtitle: "Khwaja Moinuddin Chishti Language University, Lucknow",
      date: "June 2021 - June 2025",
      details: [
        "Current SGPA: 8.33",
        "Focused on web development, databases, and software engineering principles.",
        "Participated in various coding competitions and hackathons."
      ]
    },
    {
      title: "Intermediate",
      subtitle: "Sita Ram Inter College Hanuhadih, Jaunpur",
      date: "2021",
      details: ["Grade: 87.20%"]
    },
    {
      title: "High School (10th Grade)",
      subtitle: "Sita Ram Inter College Hanuhadih, Jaunpur",
      date: "2019",
      details: ["Grade: 87.83%"]
    }
  ];

  return (
    <div className="bg-[#020617] py-10 px-5 min-h-screen" id='experience'>
      <h2 className="text-3xl font-bold text-white text-center mb-10">My Journey - Education & Experience</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((education, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-6 rounded-2xl shadow-lg border border-[#1e293b] hover:border-teal-400 transition-all duration-300 hover:shadow-teal-500/10 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold text-white">{education.title}</h3>
              <h4 className="text-teal-400 mb-1">{education.subtitle}</h4>
              <p className="text-sm text-purple-400 mb-3">{education.date}</p>
              <ul className="list-disc ml-5 text-gray-300 space-y-1">
                {education.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;