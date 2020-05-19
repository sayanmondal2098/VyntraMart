import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

// import { ReactMUIDatatable } from "react-material-ui-datatable";


import "../../../Assects/css/DashBoaed.css";
import { BACKEND_URL } from "../../config/Config";

class SellerDashBoard extends React.Component {
  constructor(props) {
    super(props);
    const sess_token = localStorage.getItem("session_token");
    let loggedIn = true;
    if (sess_token == null) {
      loggedIn = false;
    }
    this.state = {
      SellesData : [],
      loggedIn
    };
  }

  componentDidMount(){
    const url = BACKEND_URL+`/`;
    fetch(url, {
        method: "POST",
    }).then(response => response.json())
      .then(data => 
        this.setState({posts : data,
        },console.log(data)),
        console.log("Seller Id"),
        console.log(localStorage.getItem("sid") + " ~test~ " + localStorage.getItem("sname"))
    )
}

  render() {
    const sellsData = [{  
      Header: 'userId',  
      accessor: 'userId'  
     },{  
     Header: 'id',  
     accessor: 'id'  
     },
     {  
     Header: 'title',  
     accessor: 'title'  
      },
      {  
     Header: 'body',  
     accessor: 'body'  
          }
  ]  
    return (
      <div className="root  ">
        <Grid container spacing={5}>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box revenue-box">
              <div className="revenue-box">
                  <div className="overviewBoxHeading">
                      Total Revenue
                  </div>
                  <div className="overviewValue">
                      Rs. 1000
                  </div>
                  <div>
                    <Grid container spacing={3}>
                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    </Grid>
                  </div>
              </div>
             
            </Paper>
          </Grid>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box selling-box">
            <div className="revenue-box">
                  <div className="overviewBoxHeading">
                      Total Revenue
                  </div>
                  <div className="overviewValue">
                      Rs. 1000
                  </div>
                  <div>
                    <Grid container spacing={3}>
                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    </Grid>
                  </div>
              </div>
             
            </Paper>
          </Grid>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box cart-box">
            <div className="cart-box">
                  <div className="overviewBoxHeading">
                      Total Revenue
                  </div>
                  <div className="overviewValue">
                      Rs. 1000
                  </div>
                  <div>
                    <Grid container spacing={3}>
                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    </Grid>
                  </div>
              </div>
             
            </Paper>
          </Grid>
          <Grid item xs={"auto"}>
            <Paper className="paper summary-box monthlyOverview-box">
            <div className="monthlyOverview-box">
                  <div className="overviewBoxHeading">
                      Total Revenue
                  </div>
                  <div className="overviewValue">
                      Rs. 1000
                  </div>
                  <div>
                    <Grid container spacing={3}>
                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    <Grid item={"auto"}>
                    <div className="revenue-box-infoDiv">
                      <Paper className="paper gridSmallInfoBox revenue-box-info">
                        <div className="revenue-box-info">
                          <div>1</div>
                        </div>
                      </Paper>
                    </div>
                    </Grid>

                    </Grid>
                  </div>
              </div>
             
             </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className="paper">
            <div className="container">
                <ReactTable
                columns={sellsData}
                data = {this.state.posts} >

                </ReactTable>
            </div>
            </Paper>
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