import Particle from "../Particle";
import React, { useState } from "react";
import laptopImg from "./../../Assets/about.png";
import {useNavigate} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const HireMe = () => {

  const navigate = useNavigate();

  const [contact,SetContact] = useState({
    name:"",email:"",Contact:"",city:"",Message:""
  })

  let name ,value;
  const handleInput = (e)=>{
     name = e.target.name;
     value = e.target.value;
     SetContact({...contact,[name]:value})
  }

  // console.log(contact);

  const PostMessage = async (e)=>{

    e.preventDefault();
    
      const {name,email,Contact,city,Message} = contact;

      const res =  await fetch("/hireme" ,{
            method : "POST",
            headers : { 
                "content-Type" : "application/json"
            },
            body : JSON.stringify({
                name,email,Contact,city,Message
            })
        });

        if(res.status === 200){
            window.alert("Message Sent Successfully")
            navigate("/")
        }
        else if(res.status === 500){
            let element = document.getElementById("Inputtarget");
            if(element){
              element.innerHTML = "Please Enter all required fields"
            }
          }
        else {
            window.alert("Error occured , try again")
        }
  }

  return (
    <>
      <Container fluid className="about-section">
        <Particle />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Col>
              
            <Col
              md={7}
              style={{
                justifyContent: "center",
                padding: "30px",
              }}
            >
             
                <h4
                  className="purple"
                  style={{
                    fontSize: "4rem",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hire me
                </h4>

                <form method="POST">
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="hiremeinput"
                      name="name"
                      style={{
                        color: "white",
                        margin:"3% 0%",
                      }}
                      value={contact.name}
                      onChange={handleInput}
                    /> <br></br>

                    <input
                      type="email"
                    
                      style={{
                        color: "white",
                        margin:"3% 0%",
                      }}
                      placeholder="Enter Your Email"
                      className="hiremeinput"
                      name="email"
                      onChange={handleInput}
                      value={contact.email}
                    /> <br/>

                    <input
                      type="text"
                      style={{
                        color: "white",
                        margin:"3% 0%",
                      }}
                      placeholder="Enter Your Contact"
                      className="hiremeinput"
                      name="Contact"
                      onChange={handleInput}
                      value={contact.Contact}
                    /><br/>

                    <input
                      type="text"
                      style={{
                        color: "white",
                        margin:"3% 0%",
                      }}
                      placeholder="Enter Your City"
                      className="hiremeinput"
                      name="city"
                      onChange={handleInput}
                      value={contact.city}
                    /><br/>

                    <textarea
                      type="text"
                      style={{
                        color: "white",
                        margin:"3% 0%",
                      }}
                      placeholder="Why You Hire Me"
                      className="hiremeinput"
                      name="Message"
                      onChange={handleInput}
                      value={contact.Message}
                    />

                    <input type="submit" value="Submit"
                      style={{
                          width:"100%",
                          height:"45px",
                          color: "white",
                          margin:"3% 0%",
                          backgroundColor:"purple",
                          outline: "none",
                          border: "0px",
                          boxShadow: "1px 1px 3px #ffd",
                          position: "relative",
                          zIndex: "1"
                    }}

                    onClick={PostMessage}
                    />
                </form>

                <div id="Inputtarget"  
                    style={{
                        color: "white",
                        marginTop:"2%",
                        fontFamily: "cursive"
                    }}></div>
            </Col>
          </Row>
      </Container>
    </>
  );
};

export default HireMe;
