import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import userdirectory from "../../Assets/Projects/userdirectory.png";
import weather from "../../Assets/Projects/weather.png";
import moviehub from "../../Assets/Projects/moviehub.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weathery APP"
              description="web application built with React that provides real-time weather
               updates for any location. It allows users to search for cities and instantly
                view key details such as temperature, weather conditions, and humidity. By 
                integrating a public weather API, the app ensures accurate and up-to-date information,
                 while its clean interface and modern design deliver a smooth and engaging user experience 
                 across all devices.."
              ghLink="https://github.com/Rashad012/weather-app"
              demoLink="https://weatheryrashad.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviehub}
              isBlog={false}
              title="Movie Hub"
              description="Interactive web application that allows users to explore
               and discover movies with ease. Built with a modern frontend framework like React, it 
               provides detailed information such as movie titles, posters, release dates, genres, 
               and ratings. The app features a clean, responsive interface and integrates with a
                public movie database API to fetch real-time data, offering users an engaging 
                experience for browsing and searching their favorite films."
              ghLink="https://github.com/Rashad012/MOVIE_SEARCH_APP"
              demoLink="https://rashad-movie-hub.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userdirectory}
              isBlog={false}
              title="User Directory"
              description="modern and responsive web application designed to manage and display user 
              information efficiently. Built with React, it allows users to search, filter, and view
               detailed profiles in a clean, organized interface. The app integrates dynamic data fetching 
               to display user details such as names, email addresses, phone numbers, and locations. 
               With its intuitive design and smooth navigation, the User Directory provides a seamless 
               experience for browsing and managing user data across all devices."
              ghLink="https://github.com/Rashad012/USER-DIRECTORY"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
