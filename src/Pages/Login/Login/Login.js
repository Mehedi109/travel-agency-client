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
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { loginUser, isLoading, error } = useAuth();
  const [loginData, setLoginData] = useState({});
  const history = useNavigate();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/dashboard";

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password);
    history(redirect_uri);
    e.preventDefault();
  };
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h2 className="mt-3 mb-5">Login Here</h2>
            {error && (
              <Alert
                variant="danger"
                style={{ width: "84%", marginLeft: "65px" }}
              >
                {error}
              </Alert>
            )}
            {!isLoading && (
              <Form className="mx-1 mx-md-4" onSubmit={handleLogin}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fas fa-user fa-lg me-3 fa-fw "></i>
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
                  <i className="fas fa-lock fa-lg me-3 fa-fw "></i>
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
                <Button
                  type="submit"
                  variant="success"
                  style={{
                    marginRight: "330px",
                    marginBottom: "20px",
                  }}
                >
                  Login
                </Button>{" "}
                <br />
                <NavLink style={{ textDecoration: "none" }} to="/register">
                  New User?Please Register
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

export default Login;
