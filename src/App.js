import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import BooksList from "./components/BooksList";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import NotFound from "./components/NotFound";
import CheckUser from "./components/CheckUser";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <CheckUser exact path="/" component={Home} />
        <CheckUser exact path="/books" component={BooksList} />
        <CheckUser exact path="/profile" component={Profile} />
        <CheckUser exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
