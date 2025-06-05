const Skills = () => {
  const skills = {
    Frontend: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
    Backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "RESTful APIs", level: 80 },
      { name: "JWT Authentication", level: 70 },
    ],
    Tools: [
      { name: "Git/GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "Cloudinary", level: 70 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 85 },
    ],
  };

  return (
    <div className="py-20 bg-gradient-to-br from-black to-gray-900" id="skills">
      <h1 className="text-4xl font-bold text-center text-white mb-10">
        My <span className="text-cyan-400">Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {Object.entries(skills).map(([key, value], idx) => (
          <SkillCard key={idx} title={key} data={value} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ title, data }) => (
  <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-md border border-transparent hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-full transform hover:-translate-y-2">
    <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
      <span className="text-cyan-400 group-hover:text-white transition-colors duration-300">
        {title === "Frontend" ? "💻" : title === "Backend" ? "⚙️" : "🛠️"}
      </span> 
      <span className="group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </span>
    </h2>
    {data.map((skill, index) => (
      <div key={index} className="mb-4 group-hover:scale-[1.02] transition-transform duration-300">
        <div className="flex justify-between text-white mb-1">
          <span className="group-hover:text-cyan-100 transition-colors duration-200">{skill.name}</span>
          <span className="group-hover:text-cyan-400 transition-colors duration-200">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden group-hover:h-[6px] transition-all duration-300">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${skill.level}%`,
              background:
                skill.level >= 85
                  ? "linear-gradient(90deg, #00d4ff, #00f7ff)"
                  : skill.level >= 75
                  ? "linear-gradient(90deg, #ffdd00, #ffea00)"
                  : "linear-gradient(90deg, #ff5e5e, #ff7e7e)",
              boxShadow: `0 0 8px ${skill.level >= 85 ? "rgba(0, 212, 255, 0.5)" : skill.level >= 75 ? "rgba(255, 221, 0, 0.5)" : "rgba(255, 94, 94, 0.5)"}`
            }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

export default Skills;