import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Data from "./certificateimage.json";

function Certificate() {
  return (
    <Container fluid className="certificate-section">
      <Particle />
      <div style={{textAlign: "center"}}>
        <h1 className="project-heading">
          My <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates and achivement in my journey.
        </p>
        {/* Certificates  */}
        <div className="certificate-container">
            {Data.map( (item) => {
                return(
                    <div className="certificate-inner" key={item.id}>
                        <img src={item.image} alt="certificate" className="certiimage"/>
                        <h5 className="mt-2">{item.title}</h5>
                    </div>
                )
            })}        
        </div>
      </div>
    </Container>
  );
}

export default Certificate;
