// import React, { Component } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import "./css/main.css";
import logo from "./img/vmart-logo.png";
import { validation, validationString } from "./Test";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      repassword: "",
    };
  }

  validation() {
    var flag = true;
    if (this.state.name === "") {
      this.errormsg("err_name", "Enter name");
      flag = false;
    }
    if (this.state.email === "") {
      this.errormsg("err_email", "Enter email");
      flag = false;
    }
    if (this.state.password === "") {
      this.errormsg("err_password", "Enter password");
      flag = false;
    } else if (this.state.password.length < 6) {
      this.errormsg("err_password", "Password too small");
      flag = false;
    }
    if (this.state.repassword !== this.state.password) {
      this.errormsg("err_repassword", "Password doesn't match");
      flag = false;
    }
    validation(this.errormsg);
    validationString(this.errormsg);
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

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

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

  handleRepasswordChange = (event) => {
    this.setState({
      repassword: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validation()) {
      alert("Ready for form submission");
      console.log("Ready for form submission");
    } else {
      alert("Not ready for form submission");
    }
  };

  render() {
    return (
      <div className="Signup">
        <Helmet>
          <title>VMart Registration</title>
        </Helmet>
        <div className="head">
          <img className="head_logo" src={logo} alt="Logo" />
        </div>
        <div className="form_container">
          <div className="form_head">Create Account</div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <label className="form">
              <b>Your name</b>
            </label>
            <br />
            <input
              className="form_ed"
              type="text"
              onKeyDown={this.txt_tracker}
              maxLength="50"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br />
            <label className="form_error" id="err_name"></label>
            <br />
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
              maxLength="32"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="At least 6 characters"
            />
            <br />
            <label className="form_error" id="err_password"></label>
            <br />
            <label className="form">
              <b>Re-enter Password</b>
            </label>
            <br />
            <input
              className="form_ed"
              maxLength="32"
              onKeyDown={this.txt_tracker}
              type="password"
              name="repassword"
              id="repassword"
              value={this.state.repassword}
              onChange={this.handleRepasswordChange}
            />
            <br />
            <label className="form_error" id="err_repassword"></label>
            <br />
            <input className="form_btn" type="submit" value="Continue" />
          </form>
          <br />
          <br />
          <label className="form">
            Already have an account?{" "}
            <a className="emphasis_link" href="login">
              Sign in
            </a>
          </label>
        </div>
      </div>
    );
  }
}

export default Signup;
