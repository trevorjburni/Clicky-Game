import React from "react";
import "./style.css";

function Nav(props) {
  return (  
  <nav className="navbar">
    <h1 className="title">Clicky Game</h1>
    <span className="navbar-text">Score: {props.score}</span>
    <span className="navbar-text">Highscore: {props.highscore}</span> 
    {props.children}
  </nav>
  );
}

export default Nav;
