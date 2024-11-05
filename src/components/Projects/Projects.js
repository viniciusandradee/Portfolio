import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lung from "../../Assets/Projects/lung.png";
import ecoocean from "../../Assets/Projects/EcoOcean.JPG";
import inscreening from "../../Assets/Projects/InScreening.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <h2 className="category-heading">  <strong className="purple">Mobile</strong></h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecoocean}
              isBlog={false}
              title="EcoOcean events"
              description="EcoOcean is an application that carries out collection events aimed at environmental protection on beaches, so that during the events, participants come together to collect rubbish in a playful way"
              ghLink="https://github.com/viniciusandradee/EcoOcean-Mobile"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inscreening}
              isBlog={false}
              title="InScreening"
              description="InScreening is an application that helps patients carry out their screening more quickly, speeding up exams and discovering their diagnosis more easily"
              ghLink="https://github.com/viniciusandradee/InScreening-Mobile"
            />
          </Col>
        </Row>


        <h2 className="category-heading">  <strong className="purple">Machine Learning</strong></h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lung}
              isBlog={false}
              title="Lung cancer prediction model"
              description="A model capable of distinguishing between normal lungs and lungs with cancer, based on patterns identified in training images."
              ghLink="https://github.com/leitidev/InScreening-IA/tree/sprint3"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
