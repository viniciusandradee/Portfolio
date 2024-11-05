import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Vinicius Andrade </span>
            from <span className="purple"> São Paulo, Brazil.</span>
            <br />
            I am a Full Stack Developer with a passion for technology and problem-solving.
            <br />
            I'm currently focused on building solutions in various areas, including full-stack development, database management, and machine learning.
            <br/>
            I am a graduate of FIAP.
            <br />
            Throughout my journey, I've gained solid expertise in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Backend and Frontend development (Flask, Spring Boot, React, React Native)
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Database design and implementation (MySQL, Oracle, SQL Server, PostgreSQL)
            </li>
            <br/>
            <li className="about-activity">
              <ImPointRight /> Data analysis and machine learning (Python, Pandas, Scikit-Learn)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;