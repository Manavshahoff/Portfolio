import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img11.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Webapp = [
    {
      title: "SplitQuick",
      description: <p>"Developed a bill-splitting app using React for frontend development and hosted the backend on Vercel. This web application simplifies the process of dividing expenses among friends, offering a user-friendly interface and efficient functionality."</p>,
      imgUrl: projImg1,
    }
  ];

  const app = [
    {
      title: "SplitQuick",
      description: <p>"SplitQuick App"</p>,
      imgUrl: projImg2,
    }
  ];

  const website = [
    {
      title: "Nila Digital Studio",
      description: <p>"Designed and developed a captivating website for Nila Digital Studio, showcasing professional photography services. Leveraging the site features an intuitive interface, dynamic image galleries, and a seamless user experience to highlight the studio's creative portfolio."</p>,
      imgUrl: projImg3,
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
                      <Nav.Link eventKey="second">App</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Website</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">

                      <Row>
                        {
                          Webapp.map((project, index) => {
                            return (
                              <a href="https://manavshahoff.github.io/SplitQuick/">
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          app.map((project, index) => {
                            return (
                              <a href="https://manavshahoff.github.io/SplitQuick/">
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                              </a>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            website.map((project, index) => {
                              return (
                                <a href="https://manavshahoff.github.io/NilaDigitalStudio/">
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                                </a>
                              )
                            })
                          }
                        </Row>                    
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