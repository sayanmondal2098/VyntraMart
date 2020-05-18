import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import React from "react";
import "../../../Assects/css/DashBoaed.css";




class SellerDashBoard extends React.Component {
  constructor(props) {
    super(props);
    const sess_token = localStorage.getItem("session_token");
    let loggedIn = true;
    if (sess_token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn
    };
  }

  render() {
    return (
      <div className="root  ">
        <Grid container spacing={3}>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box revenue-box">
              <div className="revenue-box">
                  Total Revenue
              </div>
             
            </Paper>
          </Grid>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box selling-box">
              <div className="selling-box">
                  BOX
              </div>
            </Paper>
          </Grid>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box cart-box">
              <div className="cart-box">
                BOX
              </div>
            </Paper>
          </Grid>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box monthlyOverview-box">
              <div className="monthlyOverview-box">
                BOX
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="paper">xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="paper">xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className="paper">xs=6</Paper>
          </Grid>

        </Grid>
      </div>
    )
  }
}

export default SellerDashBoard;