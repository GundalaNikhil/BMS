import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  componentWillMount() {
    this.props.notifyPathName(window.location.pathname);
  }

  render() {
    return (
      <div>
        {this.props.pathname === "/" ? (
          <Link to="/register">Go To Register</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Nav;
