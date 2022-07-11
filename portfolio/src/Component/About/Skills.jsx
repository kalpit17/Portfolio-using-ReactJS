import React from "react";
import "./Skills.css";
const frontendSkills = [
  {
    title: "JavaScript",
    percentage: "90%"
  },
  {
    title: "React JS",
    percentage: "85%",
  },
  {
    title: "HTML and CSS",
    percentage: "95%"
  },
  {
    title: "Bootstrap",
    percentage: "95%"
  },
];

const backendSkills = [
  {
    title: "Java",
    percentage: "90%",
  },
  {
    title: "PHP",
    percentage: "95%",
  },
  {
    title: "MySQL",
    percentage: "95%",
  },
];
const Skills = () => {
  return (
    <div className="skill__wrapper d-flex gap-5">
      <div className="frontend__skill w-50">
        <h5>Frontend Skills</h5>
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="backend__skill w-50">
      <h5>Backend Skills</h5>
        {backendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skill__bar">
        <div
          className="skill__bar-percentage"
          style={{ width: `${percentage}` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
