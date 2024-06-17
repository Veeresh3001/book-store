import React, { Component } from "react";
import { AiFillEye } from "react-icons/ai";

import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Cookies from "js-cookie";

import "./index.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    errMsg: "",
    showPass: false,
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changeName = (event) => {
    this.setState({ name: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitSignUp = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const userDetails = { name, email, password };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(
      "https://user-login-1.onrender.com/users/register",
      options
    );
    const data = await response.json();
    // console.log(data);
    if (response.ok) {
      alert(
        "Registation SuccussFully Completed. Please login with your details !!"
      );
      this.setState({ name: "", email: "", password: "" });
    } else {
      this.setState({ errMsg: data.err_msg });
    }
  };

  showPasswordIcon = () => {
    this.setState((prev) => ({
      showPass: !prev.showPass,
    }));
  };

  render() {
    const { errMsg } = this.state;
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-container">
        <div className="login-card">
          <div>
            <h1 className="login-head">Register</h1>
            <form className="login-form" onSubmit={this.submitSignUp}>
              <label htmlFor="name">
                NAME<span className="star-msg">*</span>
              </label>
              <input
                id="name"
                required
                type="text"
                className="input"
                value={this.state.name}
                placeholder="Enter name"
                onChange={this.changeName}
                autoComplete="off"
              />
              <label htmlFor="email">
                EMAIL<span className="star-msg">*</span>
              </label>
              <input
                id="email"
                className="input"
                placeholder="Enter email"
                required
                type="email"
                value={this.state.email}
                onChange={this.changeEmail}
                autoComplete="off"
              />
              <label htmlFor="password">
                PASSWORD<span className="star-msg">*</span>
              </label>
              <div className="password-card">
                <input
                  id="password"
                  className="input password"
                  placeholder="Enter password"
                  type={this.state.showPass ? "text" : "password"}
                  required
                  value={this.state.password}
                  onChange={this.changePassword}
                  autoComplete="off"
                />
                <AiFillEye
                  size={30}
                  onClick={this.showPasswordIcon}
                  className={`icon ${this.state.showPass ? "icon-color" : ""}`}
                />
              </div>
              <button type="submit">Register</button>
              {errMsg !== "" && <p className="err-msg">* {errMsg}</p>}
              <div className="login-link-card">
                <p>Already Have Account</p>
                <Link className="login-link" to="/login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
