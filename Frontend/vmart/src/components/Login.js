import React from "react";
import { Helmet } from "react-helmet";
import "./css/main.css";
import logo from "./img/vmart-logo.png";
import { BACKEND_URL } from "./config/Config";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  validation() {
    var flag = true;
    if (this.state.email === "") {
      this.errormsg("err_email", "Enter email");
      flag = false;
    }
    if (this.state.password === "") {
      this.errormsg("err_password", "Enter password");
      flag = false;
    }
    return flag;
  }

  errormsg(getElementByIdName, warningMessage) {
    var variableName = document.getElementById(getElementByIdName);
    variableName.style.display = "block";
    variableName.innerHTML = warningMessage;
  }

  txt_tracker(event) {
    document.getElementById("err_" + event.target.id).style.display = "none";
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validation()) {
      this.login_user();
    }
  };

  login_user() {
    axios
      .post(
        BACKEND_URL +
          `/login?email=${this.state.email}&password=${this.state.password}`
      )
      .then((response) => {
        this.responseController(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  responseController(response) {
    if (response.status === 200) {
      if (response.data.existence_check === "not_found") {
        this.errormsg("err_email", "Email does not exist. Sign Up first");
      } else {
        if (response.data.login_status === "successful") {
          alert("User to be allowed to login!");
        } else {
          this.errormsg("err_email", "Invalid credential");
          this.errormsg("err_password", "Invalid credential");
        }
      }
    }
  }

  render() {
    return (
      <div className="Login">
        <Helmet>
          <title>VMart Login</title>
        </Helmet>
        <div className="head">
          <img className="head_logo" src={logo} alt="Logo" />
        </div>
        <div className="form_container">
          <div className="form_head">Login</div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <label className="form">
              <b>Email</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="email"
              onKeyDown={this.txt_tracker}
              maxLength="64"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <label className="form_error" id="err_email"></label>
            <br />
            <label className="form">
              <b>Password</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="password"
              onKeyDown={this.txt_tracker}
              maxLength="1024"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <label className="form_error" id="err_password"></label>
            <br />
            <input className="form_btn" type="submit" value="Continue" />
          </form>
          <br />
          <br />
          <label className="form">
            Don't have an account?{" "}
            <a className="emphasis_link" href="signup">
              Sign Up
            </a>
          </label>
        </div>
      </div>
    );
  }
}

export default Login;
