import React from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav">
      <h2>Algorithm Visualizer</h2>

      <div className="route">
        <Link id="page" to="/">
          <h3> Linear Search</h3>
        </Link>

        <Link id="page" to="/binary">
          <h3>Binary Search</h3>
        </Link>
      </div>
      <h4>algorithm visualizer copyright</h4>
    </div>
  );
}

export default Sidenav;
