import React, { Component } from "react";
import Header from "../Header";

class Cart extends Component {
  render() {
    return (
      <div className="main">
        <Header navActive="Cart" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <img
            src="https://res.cloudinary.com/dwga2gxyd/image/upload/v1712572456/Background-Completeerror_bbjc06.png"
            alt="no-items"
          />
          <h1>Your Cart Is Empty</h1>
        </div>
      </div>
    );
  }
}

export default Cart;
