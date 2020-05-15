import React from "react";
import { Helmet } from "react-helmet";
import "../../Assects/css/main.css";
import Header from "./Header";
import Footer from "./Footer";
import PromoImageSlider from "./PromoImageSlider";
import Categories from "./Categories";

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

  render() {
    return (
      <div className="Home">
        <Helmet>
          <title>VMart</title>
        </Helmet>
        <Header />
        <PromoImageSlider/>
        <Categories/>
        <Footer />
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
