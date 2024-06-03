import React from "react";
import githublogo from "../assets/images/githublogo.jpg";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";



const About = () => {
  const nav = useNavigate();

  return (
    <div className="about">
      <h2>Renan and Zeina's mini-project</h2>

      <div >
        <a href="https://github.com/zeinamershed">
        <button> Zeina's GitHub </button>
        </a>
    
        <a href="https://github.com/renanjazz">
        <button>Renan's GitHub</button>
        </a>
        </div>

    </div>
  );
};

export default About;
