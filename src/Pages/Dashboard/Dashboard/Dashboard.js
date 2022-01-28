import React from "react";
import { Container, Nav, Navbar, NavDropdown, Spinner } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, admin, isLoading } = useAuth();
  return (
    <div className="dashboard">
      <div className="menubar">
        {!admin && user.email && (
          <>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/myOrders"
              >
                My Orders
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/myMessage"
              >
                My Message
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/review"
              >
                Review
              </Nav.Link>
            </li>
          </>
        )}
        {admin && user.email && (
          <>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/showHouse"
              >
                {" "}
                Houses
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/addHouse"
              >
                {" "}
                Add House
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/manageOrders"
              >
                Manage Orders
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/messages"
              >
                Messages
              </Nav.Link>
            </li>
            <li>
              <Nav.Link
                style={{ color: "white" }}
                as={Link}
                to="/dashboard/makeAdmin"
              >
                Make Admin
              </Nav.Link>
            </li>
          </>
        )}
        <li>
          <Nav.Link style={{ color: "white" }} as={Link} to="/home">
            Back Home
          </Nav.Link>
          <Nav.Link
            style={{ color: "white" }}
            as={Link}
            to="/dashboard/addExperience"
          >
            Add Experience
          </Nav.Link>
        </li>
      </div>
      <div className="dashboard-body">
        <h4 className="">Dashboard</h4>
        <Container>
          {isLoading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          <Outlet></Outlet>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
