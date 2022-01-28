import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Experience from "../Experience/Experience";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/experiences")
      .then((res) => res.json())
      .then((data) => setExperiences(data));
  }, []);
  return (
    <Container>
      <div>
        <h3 className="mt-5 mb-3">Traveler Experiences</h3>
        <Row>
          {experiences.map((experience) => (
            <Experience
              key={experience._id}
              experience={experience}
            ></Experience>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Experiences;
