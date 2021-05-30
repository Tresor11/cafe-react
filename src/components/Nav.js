import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h4>CAFE REACT</h4>
      </Link>
    </div>
  );
};

export default Nav;
