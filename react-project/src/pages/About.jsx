import React from "react";
import githublogo from "../assets/images/githublogo.jpg";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";



const About = () => {
  const nav = useNavigate();

  return (
    <div>
      <h2>Renan and Zeina's mini-project</h2>
      <button>
        <a href="https://github.com/zeinamershed/mini-project-react">
          <img src={githublogo} alt="github-logo" />
        </a>
      </button>
    </div>
  );
};

export default About;
