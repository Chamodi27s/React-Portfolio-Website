import React from "react";
import "./Skills.css";

// Import skill images
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import reactImg from "../assets/reactjs.png";
import nodeImg from "../assets/nodejs.png";
import pythonImg from "../assets/python.svg";
import phpImg from "../assets/php.svg";
import mysqlImg from "../assets/mysql.svg";
import javaImg from "../assets/java.svg";
import tailwindImg from "../assets/tailwind.png";
import mongodbImg from "../assets/mongodb.png";
import expressImg from "../assets/express1.png";
import typescriptImg from "../assets/typescript.png";
import gitImg from "../assets/git.png";
import seleniumImg from "../assets/selenium.png";
import postmanImg from "../assets/postman.png";
import vscodeImg from "../assets/vscode.png";
import figmaImg from "../assets/figma.png";

// Skill data
const skills = [
  { name: "HTML", icon: htmlImg, type: "Tech", percent: 90 },
  { name: "CSS", icon: cssImg, type: "Tech", percent: 85 },
  { name: "JavaScript", icon: jsImg, type: "Tech", percent: 80 },
  { name: "React.js", icon: reactImg, type: "Tech", percent: 80 },
  { name: "Node.js", icon: nodeImg, type: "Tech", percent: 75 },
  { name: "Python", icon: pythonImg, type: "Tech", percent: 70 },
  { name: "PHP", icon: phpImg, type: "Tech", percent: 65 },
  { name: "MySQL", icon: mysqlImg, type: "Tech", percent: 80 },
  { name: "Java", icon: javaImg, type: "Tech", percent: 75 },
  { name: "TailwindCSS", icon: tailwindImg, type: "Tech", percent: 85 },
  { name: "MongoDB", icon: mongodbImg, type: "Tech", percent: 70 },
  { name: "Express.js", icon: expressImg, type: "Tech", percent: 75 },
  { name: "TypeScript", icon: typescriptImg, type: "Tech", percent: 70 },
  { name: "Git & GitHub", icon: gitImg, type: "Tool", percent: 85 },
  { name: "Selenium", icon: seleniumImg, type: "Tool", percent: 70 },
  { name: "Postman", icon: postmanImg, type: "Tool", percent: 80 },
  { name: "VS Code", icon: vscodeImg, type: "Tool", percent: 90 },
  { name: "Figma", icon: figmaImg, type: "Tool", percent: 75 },
];

// Functions
const getLevelText = (percent) => (percent >= 60 ? "Expert" : "Intermediate");
const getColorByLevel = (percent) => (percent >= 60 ? "#FFD700" : "#3B82F6");

// Skill Card Component
const SkillCard = ({ skill }) => (
  <div className="skill-card">
    <div className="badge-wrapper">
      <span className={`badge ${skill.type.toLowerCase()}`}>{skill.type}</span>
    </div>

    {skill.icon && (
      <div className="icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
    )}

    <p>{skill.name}</p>

    <span className={`level-text ${getLevelText(skill.percent).toLowerCase()}`}>
      {getLevelText(skill.percent)}
    </span>

    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${skill.percent}%`, backgroundColor: getColorByLevel(skill.percent) }}
      ></div>
    </div>

    <span className="percent-text">{skill.percent}%</span>
  </div>
);

// Main Skills Component
const Skills = () => {
  const techSkills = skills.filter((s) => s.type === "Tech");
  const toolSkills = skills.filter((s) => s.type === "Tool");

  const overallPercent = Math.round(
    skills.reduce((sum, s) => sum + s.percent, 0) / skills.length
  );

  return (
    <section className="skills-combined" id="skills">
      <h2 className="gradient-header">My Skills</h2>
      <p>Technologies & Tools I Use</p>

      {/* Technologies */}
      <h3 className="section-title">Technologies</h3>
      <div className="skills-grid">
        {techSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Tools */}
      <h3 className="section-title">Tools</h3>
      <div className="skills-grid">
        {toolSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>

      {/* Overview */}
      <h3 className="section-title">Overview</h3>
      <div className="skills-grid">
        <SkillCard
          skill={{
            name: "Overall Skill",
            icon: "",
            type: "Overview",
            percent: overallPercent,
          }}
        />
      </div>
    </section>
  );
};

export default Skills;
