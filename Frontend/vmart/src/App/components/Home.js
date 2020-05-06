import React from "react";
import { Helmet } from "react-helmet";
import "../../Assects/css/main.css";
import logo from "../../Assects/img/vmart-logo.png";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const sess_token = localStorage.getItem("session_token");
    let loggedIn = true;
    if (sess_token == null) {
      loggedIn = false;
    }
    this.state = {
      customerName: localStorage.getItem("name"),
      loggedIn,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("session_token");
    localStorage.removeItem("uid");
    localStorage.removeItem("name");
    this.setState({
      loggedIn: false,
    });
  };

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="Login">
        <Helmet>
          <title>VMart</title>
        </Helmet>
        <div className="head">
          <img className="head_logo" src={logo} alt="Logo" />
        </div>
        <div className="form_container">
          <div className="form_head">Welcome {this.state.customerName}</div>
          <br />
          <form onSubmit={this.handleSubmit}>
            <input className="form_btn" type="submit" value="Logout" />
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
