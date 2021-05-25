import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EducationLoan from "./components/EducationLoan";
import Loan from "./components/Loan";
import Login from "./components/Login";
import Register from "./components/Register";
import Nav from "./components/Nav";
import Success from "./components/Success";
import Home from "./components/Home";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: "",
    };

    this.notifyPathName = this.notifyPathName.bind(this);
  }

  notifyPathName(pathname) {
    this.setState({
      pathname: pathname,
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Nav
            notifyPathName={this.notifyPathName}
            pathname={this.state.pathname}
          />
          <Switch>
            <Route path="/" exact component={() => <Login />} />
            <Route path="/register" exact component={() => <Register />} />
            <Route path="/loan" exact component={() => <Loan />} />
            {/* <Route path="/edu" exact component={() => <EducationLoan />} /> */}
            <Route path="/success" exact component={() => <Success />} />
            <Route path="/home" exact component={() => <Home />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
