import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import BooksList from "./components/BooksList";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import NotFound from "./components/NotFound";
import CheckUser from "./components/CheckUser";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <CheckUser exact path="/" component={Home} />
        <CheckUser exact path="/books" component={BooksList} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
