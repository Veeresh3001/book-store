import { Component } from "react";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

import { AiFillEye } from "react-icons/ai";

import Cookies from "js-cookie";

import "./index.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errMsg: "",
    showPass: false,
  };

  showPasswordIcon = () => {
    this.setState((prev) => ({ showPass: !prev.showPass }));
  };

  loginFialure = (errMsg) => {
    this.setState({ errMsg });
    // console.log(errMsg);
  };

  loginSuccuss = (token) => {
    Cookies.set("jwt_token", token, { expires: 30 });
    const { history } = this.props;
    history.replace("/");
  };

  changeUsername = (event) => {
    this.setState({ email: event.target.value });
  };

  changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitLogin = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;
    const userDetails = { email, password };
    // console.log(userDetails);

    // console.log(JSON.stringify(userDetails));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(
      "https://mvc-login.onrender.com/login",
      options
    );
    const data = await response.json();
    // console.log(data);

    if (data.status === 200) {
      this.loginSuccuss(data.jwt_token);
    } else {
      // console.log(data);
      this.loginFialure(data.err_msg);
    }
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
            <h1 className="login-head">Login</h1>
            <form className="login-form" onSubmit={this.submitLogin}>
              <label htmlFor="email">
                EMAIL<span className="star-msg">*</span>
              </label>
              <input
                id="email"
                required
                className="input"
                type="email"
                value={this.state.email}
                placeholder="Enter Your Username"
                onChange={this.changeUsername}
              />
              <label htmlFor="password">
                PASSWORD<span className="star-msg">*</span>
              </label>
              <div className="password-card">
                <input
                  type={this.state.showPass ? "text" : "password"}
                  required
                  id="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.changePassword}
                />
                <AiFillEye
                  size={30}
                  onClick={this.showPasswordIcon}
                  className={`icon ${this.state.showPass ? "icon-color" : ""}`}
                />
              </div>
              <button type="submit">Login</button>
              {errMsg !== "" && (
                <p className="err-msg">
                  <span className="star-msg">*</span>
                  {errMsg}
                </p>
              )}
              <div className="login-link-card">
                <p>Create New Account</p>
                <Link className="login-link" to="/register">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
