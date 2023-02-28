import React, { useEffect } from "react";
import {Col, Row} from "react-bootstrap";
import TagCloud from "TagCloud";
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
        useEffect(() => {
            return() => {
                const container = ".tagcloud";
                const texts = [
                    "C#",
                    "HTML5",
                    "CSS",
                    "JavaScript",
                    "Bootstrap",
                    "NodeJS",
                    "React",
                    "SQL",
                    "GIT",
                    "GITHUB",
                    "C++",
                    "Unity",
                    "Unreal Engine",
                    "Java",
                    "TailwindCSS",
                    ".NET",
                    "Maya",                                                                                     
                ];
    
                const options = {
                    radius: 300,
                    maxSpeed: "fast",
                    initSpeed: "fast",
                    keep: true,
                };
    
                TagCloud(container, texts, options);
            };
        }, []);
    
        return (
            <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{`<Skills & Experience />`}</h2>
                        <Row className="text-sphere">
                            <Col>
                            <p className="font">
                                The main area of my expertice is in the Front-End Development Section.  
                                I have a great passion and find it most exciting when working on UI/UX. 
                                I also have extensive experience working with the .NET Framework working on programs using C# and SQLServer.
                                I have taken the libirty to also start self-teaching myself how to use programs such as Unity, Unreal Engine and Maya as I have a great passion for video games 
                                and have a dream of one day working in the game development industry.
                            </p>
                            </Col>
                            <Col>
                            <span className="tagcloud"></span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
        );
}