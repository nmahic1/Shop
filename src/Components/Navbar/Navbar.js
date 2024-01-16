import React from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* <Link to="/"> */}
      <p className="name">M.a.s Shop</p>
      {/* </Link> */}

      <div className="right">
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
        <Link to="/products">
          <Button>Products</Button>
        </Link>
        <Link to="/">
          <Button>Home</Button>
        </Link>{" "}
      </div>
    </nav>
  );
}

export default Navbar;
