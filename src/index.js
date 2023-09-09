import { createRoot } from "react-dom/client";
import "./styles.css";

const Skills = [
  {
    skill: "Html+CSS",
    level: "Intermediate",
    color: "blue"
  },
  {
    skill: "Javascript",
    level: "Beginner",
    color: "orange"
  },
  {
    skill: "React",
    level: "Beginner",
    color: "red"
  },
  {
    skill: "SQL",
    level: "Advanced",
    color: "green"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" alt="profile" src="Image.jpg" />;
}

function Intro() {
  return (
    <div>
      <h3>Suraj Raj</h3>
      <p>
        A student and noob web developer.In my free time i like read and write
        poetry.I love exploring about new technology.I enjoy Astronomy as well.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {Skills.map((skill) => (
        <Skill level={skill.level} skill={skill.skill} color={skill.color} />
      ))}
    </div>
  );
}

function Skill({ level, skill, color }) {
  return (
    <div>
      <p className="skill" style={{ backgroundColor: color }}>
        <span>{skill} </span>
        <span>
          {level === "Beginner" && "👶"}
          {level === "Intermediate" && "😁"}
          {level === "Advanced" && "💪"}
        </span>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
