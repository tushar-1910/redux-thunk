import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "whitesmoke",
        marginBottom: "10px"
      }}
    >
      <Link to="/">REGISTER</Link>
      <Link to="/login">LOGIN</Link>
    </div>
  );
};

export default Navbar;
