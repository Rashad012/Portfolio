import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">MOHAMED RASHAD A.K</span>{" "}
            from <span className="purple">Chennai, India</span>.
            <br />
            I’m currently studying as a{" "}
            <span className="purple">B.Tech Artificial Intellegence and Data Science</span>  student at{" "}
            <span className="purple">Vel Tech High Tech</span>.
            <br />{" "}
            <span className="purple"></span> {" "}
            <span className="purple"></span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> video editing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           "Code with purpose, design with passion."{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Rashad AK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
