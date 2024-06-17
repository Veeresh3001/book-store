import React from "react";

import "./index.css";
import Header from "../Header";

const NotFound = () => {
  return (
    <div className="main">
      <Header />
      <div className="not-found">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not-found"
        />
        <h1>Oops, Something went wrong.</h1>
        <p>Please refresh the page and try it again</p>
      </div>
    </div>
  );
};

export default NotFound;
