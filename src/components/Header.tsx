import * as React from "react";
import { Navbar, NavbarBrand, NavItem } from "reactstrap";
import "./Header.css";

function Header() {
  return (
    <div className="text-center">
      <Navbar className="my-2" color="dark" dark>
        <NavbarBrand href="/"></NavbarBrand>
        <NavItem></NavItem>
      </Navbar>
      <img
        src="/logo192.png"
        width="192"
        className="img-thumbnail"
        style={{ marginTop: "20px" }}
        alt={"alt text"}
      />
      <hr />
      <h5>
        <i>presents</i>
      </h5>
      <h1>App with React + Django</h1>
    </div>
  );
}

export default Header;
