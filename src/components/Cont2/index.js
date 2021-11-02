import React, { useState } from "react";
import "./style.css";

export default function Cont2() {
  const [skills] = useState([
    "Python",
    "HTML",
    "CSS",
    "Javascript",
    "C#",
    "React",
    "jQuery",
    "Github",
    "Bootstrap",
    "Java"
    
  ]);
  return (
    <div>
      <h3> ABOUT</h3>
      <hr />
      <p>
        {" "}
        Graduated from Qassim University in 2020 majoring in Information Technology
      </p>
   
      <h3> WORK EXPERIENCE</h3>
      <hr />
      <h4>assistant manager</h4>
      <p>10/2019 - 12/2019</p>
      <p>
      Summer training in two months, and its goal is to practice what was studied during the years of study in information technology.
      </p>

      <h3> SKILLS</h3>
      <hr />
      <p>
        
        {skills.map((item) => {
          return <span> {item}</span>;
        })}
      </p>

      <h3> EDUCATION </h3>
      <hr />
      <h4> Bachelor of information technology </h4>
      <h4>Qassim University </h4>
      <p>01/2016 - 09/2020</p>
    </div>
  );
}
