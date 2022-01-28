import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const { user, createNewUser, isLoading, error } = useAuth();
  const history = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
    console.log(field, value);
  };

  const handleRegister = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Password did not match");
    }
    createNewUser(
      registerData.email,
      registerData.password,
      registerData.name,
      history
    );
    e.preventDefault();
  };

  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2 className="mt-3 mb-5">Register Here</h2>
            {user.email && (
              <Alert
                variant="success"
                style={{ width: "84%", marginLeft: "65px" }}
              >
                User created successfully
              </Alert>
            )}
            {error && (
              <Alert
                variant="danger"
                style={{ width: "84%", marginLeft: "65px" }}
              >
                {error}
              </Alert>
            )}
            {!isLoading && (
              <Form className="mx-1 mx-md-4" onSubmit={handleRegister}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw "></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                  <div className="w-100 ">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="password2"
                      onBlur={handleOnBlur}
                      className=""
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  variant="success"
                  style={{
                    marginRight: "330px",
                    marginBottom: "20px",
                  }}
                >
                  Register
                </Button>{" "}
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  Already Registered?Please Login
                </NavLink>
              </Form>
            )}
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img
              className="img-fluid"
              src="https://i.ibb.co/Vw9wrBB/photo-1554415707-6e8cfc93fe23-crop-entropy-cs-tinysrgb-fit-max-fm-jpg-ixid-Mnwx-Mj-A3f-DB8-MXxhb-Gx8.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
