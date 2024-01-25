import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container-fluid">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/viewCustomers">Boss-1 Dairy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/viewCustomers">View Customer Details</Nav.Link>
            <Nav.Link href="/editCustomers">Add Customer</Nav.Link>
          </Nav>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
