import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import CheckUser from "./components/CheckUser";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <CheckUser exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
