import React from "react";
import { Card, Col } from "react-bootstrap";

const Experience = ({ experience }) => {
  const { _id, name, date, time, rent, rating, description, image } =
    experience;
  return (
    <div>
      <Col xs={12} md={4} className="g-4">
        <div>
          <Card
            className="shadow-lg"
            style={{
              height: "",
              borderRadius: 0,
              // backgroundColor: '#478ecb7d',
              backgroundColor: "",
              border: "none",
              textAlign: "start",
              fontFamily: "Roboto,sansSerif",
            }}
          >
            <Card.Img
              variant="top"
              src={`data:image/jpg;base64,${image}`}
              style={{ height: "250px", borderRadius: 0 }}
            />
            <Card.Body className="">
              <div>
                <Card.Title>{name}</Card.Title>
                {/* <Card.Text>{description.slice(0, 100)}</Card.Text> */}
                <h6>{date}</h6>
                <h6>{time}</h6>
              </div>
              <h5>{rent} </h5>
              <h5>{rating}</h5>
            </Card.Body>
            <small className="text-muted">
              <button
                className="btn btn-success mb-5 border-radius-0"
                style={{
                  backgroundColor: "",
                  marginBottom: "15px",
                  marginLeft: "15px",
                }}
              >
                See Details
              </button>
            </small>
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default Experience;
