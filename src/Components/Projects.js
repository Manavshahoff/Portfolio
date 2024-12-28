import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img2.png";
import projImg2 from "../assets/img/arduino_project_background.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/expense_tracker_background.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Webapp = [
    {
      title: "SplitQuick",
      description: <p>"Developed a bill-splitting app using React for frontend development and hosted the backend on Vercel."</p>,
      imgUrl: projImg1,
      link: "https://manavshahoff.github.io/SplitQuick/"
    },
    {
      title: "ExpenseTracker",
      description: <p>"Track and manage expenses effortlessly with this Spring Boot-powered application."</p>,
      imgUrl: projImg4,
      link: "https://github.com/Manavshahoff/expense-tracker.git"
    }
  ];

  const app = [
    {
      title: "AI Object Tracking",
      description: <p>"A real-time system that detects humans and dynamically moves toward them using computer vision and machine learning."</p>,
      imgUrl: projImg2,
      link: "https://github.com/Manavshahoff/AI_Object_Tracking.git"
    }
  ];

  const website = [
    {
      title: "Nila Digital Studio",
      description: <p>"Designed and developed a captivating website for Nila Digital Studio, showcasing professional photography services."</p>,
      imgUrl: projImg3,
      link: "https://manavshahoff.github.io/NilaDigitalStudio/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are a few examples of my work, showcasing diverse projects from web applications to mobile apps and professional portfolios.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WebApp</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Hardware</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Website</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">

                    <div className="webapp-container">
                        {
                          Webapp.map((project, index) => {
                            return (
                              <div className="project-item" key={index}>

                                <ProjectCard
                                  {...project}
                                  link={project.link}
                                  />
                              </div>
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="webapp-container">
                        {
                          app.map((project, index) => {
                            return (
                                <ProjectCard
                                  {...project}
                                  />
                            )
                          })
                        }
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="webapp-container">
                          {
                            website.map((project, index) => {
                              return (
                                <ProjectCard
                                  {...project}
                                  />
                              )
                            })
                          }
                      </div>                    
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}