const Skills = () => {
 const skills = {
  "Programming Languages": [
    { name: "JavaScript", tier: "Proficient" },
    { name: "Python", tier: "Intermediate" },
    { name: "Java", tier: "Familiar" },
  ],
  Frontend: [
    { name: "HTML", tier: "Expert" },
    { name: "CSS", tier: "Expert" },
    { name: "React.js", tier: "Proficient" },
    { name: "Tailwind CSS", tier: "Proficient" },
    { name: "React Native", tier: "Intermediate" },
  ],
  Backend: [
    { name: "Node.js", tier: "Proficient" },
    { name: "Express.js", tier: "Intermediate" },
    { name: "RESTful APIs", tier: "Proficient" },
    { name: "JWT Authentication", tier: "Intermediate" },
  ],
  Database: [
    { name: "MongoDB", tier: "Intermediate" },
    { name: "MySQL (Basic)", tier: "Familiar" },
  ],
  Tools: [
    { name: "Git/GitHub", tier: "Proficient" },
    { name: "Postman", tier: "Expert" },
    { name: "VS Code", tier: "Proficient" },
    { name: "Android Studio", tier: "Familiar" },
    { name: "Cloudinary", tier: "Intermediate" },
    { name: "Nodemailer", tier: "Familiar" },
    { name: "Stripe", tier: "Familiar" },
    { name: "Stripe", tier: "Familiar" },
  ],
  "Soft Skills": [
    { name: "Problem Solving", tier: "Expert" },
    { name: "Debugging", tier: "Proficient" },
    { name: "Team Collaboration", tier: "Proficient" },
  ],
};

// ... rest of Skills component remains the same
// Mapping tier to percentage for the progress bar
const tierToLevel = (tier) => {
  switch (tier) {
    case "Expert":
      return 95; // Use a high bar
    case "Proficient":
      return 80;
    case "Intermediate":
      return 65;
    case "Familiar":
      return 45;
    default:
      return 0;
  }
};

const SkillCard = ({ title, data }) => {
  // Function to determine the icon based on the title
  const getIcon = (title) => {
    switch (title) {
      case "Frontend":
        return "💻";
      case "Backend":
        return "⚙️";
      case "Tools":
        return "🛠️";
      case "Soft Skills":
        return "🧠";
      case "Database":
        return "🗄️";
      case "Programming Languages":
        return "🐍"; // For Python/Java/JS
      default:
        return "🎯";
    }
  };

  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-md border border-transparent hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 w-full transform hover:-translate-y-2">
      <h2 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
        {/* Subtle glow effect on hover via shadow */}
        <span className="text-cyan-400 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_8px_rgba(40,255,255,0.7)]">
          {getIcon(title)}
        </span>
        <span className="group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </span>
      </h2>
      {data.map((skill, index) => {
        const level = tierToLevel(skill.tier); // Get level from tier
        return (
          <div
            key={index}
            className="mb-4 group-hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex justify-between text-white mb-1">
              <span className="group-hover:text-cyan-100 transition-colors duration-200">
                {skill.name}
              </span>
              {/* Display the tier instead of the percentage */}
              <span className="font-semibold group-hover:text-cyan-400 transition-colors duration-200">
                {skill.tier}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden group-hover:h-[6px] transition-all duration-300">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${level}%`,
                  // Dynamic background/shadow based on tier
                  background:
                    skill.tier === "Expert"
                      ? "linear-gradient(90deg, #00d4ff, #00f7ff)"
                      : skill.tier === "Proficient"
                      ? "linear-gradient(90deg, #38c172, #65e08b)" // Green for Proficient
                      : skill.tier === "Intermediate"
                      ? "linear-gradient(90deg, #ffdd00, #ffea00)" // Yellow for Intermediate
                      : "linear-gradient(90deg, #ff5e5e, #ff7e7e)", // Red/Orange for Familiar
                  boxShadow: `0 0 8px ${
                    skill.tier === "Expert"
                      ? "rgba(0, 212, 255, 0.5)"
                      : skill.tier === "Proficient"
                      ? "rgba(56, 193, 114, 0.5)"
                      : skill.tier === "Intermediate"
                      ? "rgba(255, 221, 0, 0.5)"
                      : "rgba(255, 94, 94, 0.5)"
                  }`,
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
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
        {title === "Frontend"
          ? "💻"
          : title === "Backend"
          ? "⚙️"
          : title === "Tools"
          ? "🛠️"
          : title === "SoftSkill"
          ? "🧠"
          : "🎯"}
      </span>
      <span className="group-hover:text-cyan-400 transition-colors duration-300">
        {title}
      </span>
    </h2>
    {data.map((skill, index) => (
      <div
        key={index}
        className="mb-4 group-hover:scale-[1.02] transition-transform duration-300"
      >
        <div className="flex justify-between text-white mb-1">
          <span className="group-hover:text-cyan-100 transition-colors duration-200">
            {skill.name}
          </span>
          <span className="group-hover:text-cyan-400 transition-colors duration-200">
            {skill.level}%
          </span>
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
              boxShadow: `0 0 8px ${
                skill.level >= 85
                  ? "rgba(0, 212, 255, 0.5)"
                  : skill.level >= 75
                  ? "rgba(255, 221, 0, 0.5)"
                  : "rgba(255, 94, 94, 0.5)"
              }`,
            }}
          ></div>
        </div>
      </div>
    ))}
  </div>
);

export default Skills;
