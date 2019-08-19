import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../scss/index.scss";
import Login from "../components/Login";
import Success from "../components/Success";

import HomePage from "../components/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/success" component={Success} />
      </div>
    );
  }
}
export default App;
