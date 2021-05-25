import React, { Component } from "react";
import { connect } from "react-redux";
import { userLoginLoading } from "../../actions/action";
import {
  // Paper,
  // Grid,
  // TextField,
  // Button,
  // FormControlLabel,
  // Checkbox,
  Container,
} from "@material-ui/core";

import "./Login.css";

// import { Face, Fingerprint } from "@material-ui/icons";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
    };
  }

  handleChangeLogin = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    this.props.onLoginClick(this.state);
  };

  render() {
    const x = Object.values(this.state);
    const y = this.props;
    console.log(y);
    return (
      <div className="login-container">
        <Container maxWidth="sm">
          <form
            className="login"
            // action="/register"
            // method="post"
            onSubmit={this.handleSubmitLogin.bind(this)}
          >
            <h1>Login Here</h1>
            <br></br>
            <div className="form-group">
              Username:
              <input
                type="text"
                id="username"
                placeholder="UserName"
                name="name"
                className="form-control"
                onChange={this.handleChangeLogin.bind(this)}
                required
              />
              {/* <div className="text-danger">{this.state.errors.uname}</div> */}
              <br />
            </div>
            <div className="form-group">
              Password:
              <input
                type="password"
                id="Password"
                placeholder="Password"
                name="pwd"
                className="form-control"
                onChange={this.handleChangeLogin.bind(this)}
                required
              />
              {/* <div className="text-danger">{this.state.errors.pwd}</div> */}
              <br />
            </div>

            <button
              type="submit"
              className="submit_btn"
              // onClick={this.handleSubmitLogin}
            >
              Login
            </button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginClick: (cred) => {
      dispatch(userLoginLoading(cred));
    },
  };
};
export default connect(null, mapDispatchToProps)(Login);
