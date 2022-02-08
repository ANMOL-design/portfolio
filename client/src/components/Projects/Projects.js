import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import AgroAcers from "../../Assets/project/AgroAcers.png";
import leaf from "../../Assets/project/Todo.png";
import clock from "../../Assets/project/clock.png";
import Ecommerce from "../../Assets/project/Ecommerce.png";
import Eduscope from "../../Assets/project/Eduscope.png";
import blog from "../../Assets/project/Blog.png";
import Foodies from "../../Assets/project/Foodies.png";
import Batman from "../../Assets/project/Batman.png";
import Python from "../../Assets/project/Python.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{textAlign: "center"}}>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eduscope}
              isBlog={false}
              title="Eduscope"
              description="A nodejs based application that contains the syllabus of all the courses of B.tech plus 420+ previous year question paper and sample papers for practice. 6th level of Authentication is used to keep the user database secured. Students will benefit from easily access and download the syllabus and relevant materials with eduSCOPE."
              link="https://eduscope2000.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AgroAcers}
              isBlog={false}
              title="AgroAcers"
              description="AgroAcers is a data-driven full-stack Website platform that makes farming intelligent and empowers farmers to double their income. Farmers can get  crop protection, crop nutrition, seeds, agriculture equipment, and tools which is 300+ product range , 3000+ mandi Rates , weather Information, Govt. Schemes and 100+ blogs which involves able for the farmer's services.
              "
              link="https://github.com/ANMOL-design/AgroAcers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="iShop"
              description="iShop is a full-stack Ecommerce website in which electronics products are sold, The website contain Razorpay Payment Gateway Features, Searching and Sorting techniques to find products easily and detailed description of each product. This website helps me to get comfortable in developing single page application and learn the new concepts of React. "
              link="https://anmol-design-ishop.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="To-DO App"
              description="ToDo app was created using HTML,CSS and Javascript. TODO List are the lists that we generally use to maintain our day to day tasks that we have to do, with the most important tasks at the top and the least important tasks at the bottom. It is helpful in planning our daily schedules. We can add more tasks any time and delete a task which is completed."
              link="https://anmol-design.github.io/Todo-UX/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog APP"
              description="The Blog App was created using  React,CSS, NodeJs and Mongodb in this app the blog is fetch from the backend. This is basically a clone of blog website created by Mern Stack contain blogs of food, technology and heath etc.This is completely responsive Website and also use a concept of hooks, redux and routes"
              link="https://anmol-design.github.io/TechnoBlog/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Digital Clock"
              description="This is basic project of HTML,CSS and Javascript (Digital clock) .Clocks are useful element for any UI if used in a proper way.The approach is to use the date object to get time on every second
              and then re-rendering time on the browser using the new time that we got by calling the same function each second."
              link="https://anmol-design.github.io/Digtal-Clock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Foodies}
              isBlog={false}
              title="Foodies"
              description="This is basic project of HTML,CSS, Bootstrap and Javascript. This is basically a clone of online foods selling website online like Zomato, Swiggy. The website contain different food items with detailed description and rating.
              It also contain information about chef and location of Shop."
              link="https://github.com/ANMOL-design/Foodies"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Batman}
              isBlog={false}
              title="Batman"
              description="The Batman website was created using HTML,CSS and Javascript. Batman a fictional American comic character who has special powers and fight against
              villans. I'm a lover of Marvels and DC comics and movies and decided to create a webpage of my favourite character."
              link="https://anmol-design.github.io/Backtracking/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Python}
              isBlog={false}
              title="Python Programs"
              description="I'm created a large number of Python Programs covers concepts like OOPS, DSA, Open-CV, Turtle, Py-games, Pip.
              My list of major python projects are Personal Assistance, Security Camera, Docment Reader,Simple Games, Image conversion, Whatsapp Message Automation etc."
              link="/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
