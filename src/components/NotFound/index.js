import React from "react";

import "./index.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not-found"
      />
      <h1>Oops, Something went wrong.</h1>
      <p>Please refresh the page and try it again</p>
    </div>
  );
};

export default NotFound;
