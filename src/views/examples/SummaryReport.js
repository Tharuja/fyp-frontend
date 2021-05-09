/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import UserHeader from "components/Headers/SummaryReportHeader.js";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       allFoods: [],
       allGroups: [],
       allInteractions : [],
       allWash : []

      };
  } 

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/v1/foods")
      .then(res => {
        const foods = res.data;
        this.setState({
          allFoods:foods,
        })
        //console.log(foods[0].food_no)
      })
      .catch((e) => console.log(e));

    axios
        .get("http://localhost:4000/api/v1/groups")
        .then(res => {
        const groups = res.data;
        this.setState({
            allGroups:groups,
        })
        //console.log(groups[0].amount)
        })
        .catch((e) => console.log(e));

        axios
        .get("http://localhost:4000/api/v1/interaction")
        .then(res => {
          const interactions = res.data;
          this.setState({
            allInteractions:interactions,
          })
          //console.log(foods[0].food_no)
        })
        .catch((e) => console.log(e));
  
      axios
          .get("http://localhost:4000/api/v1/washroom")
          .then(res => {
          const wash = res.data;
          this.setState({
            allWash:wash,
          })
          //console.log(groups[0].amount)
          })
          .catch((e) => console.log(e));
  }


  render() {

    const foodRecords = this.state.allFoods.map((foodRecord,index) =>
      <tr>
      <th scope="row">{index}</th>
      <td>{foodRecord.cctv_video_no}</td>
      <td>{foodRecord.food_type}</td>
      <td>{foodRecord.food_amount}</td>
    </tr>
    );

    const groupRecords = this.state.allGroups.map((groupRecord,index) =>
      <tr>
      <th scope="row">{index}</th>
      <td>{groupRecord.cctv_video_no}</td>
      <td>{groupRecord.group_id}</td>     
      <td>{groupRecord.group_type}</td>
      <td>{groupRecord.members_amount}</td>
    </tr>
    );

    const interactionRecords = this.state.allInteractions.map((interactionRecord,index) =>
    <tr>
    <th scope="row">{index}</th>
    <td>{interactionRecord.date}</td>
    <td>{interactionRecord.time}</td>     
  </tr>
  );

    const washRecords = this.state.allWash.map((washRecord,index) =>
    <tr>
    <th scope="row">{index}</th>
    <td>{washRecord.date}</td>
    <td>{washRecord.gender}</td>     
    </tr>
    );  

    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">

                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h2 className="mb-0">All Statistics</h2>
                    </Col>
                  </Row>
                </CardHeader>

                <CardBody>
                <h3>Ordered Food Items </h3>
                  <table class="table align-items-center table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Camera No</th>
                      <th scope="col">Food Type</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodRecords}
                  </tbody>
                </table>                
                </CardBody>

                <CardBody>
                <h3>Customers Arrival Type </h3>
                  <table class="table align-items-center table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Camera No</th>
                      <th scope="col">Assigned Id</th>
                      <th scope="col">Arrival Type</th>
                      <th scope="col">Number of members</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupRecords}
                  </tbody>
                </table>                  
                </CardBody>

                <CardBody>
                <h3>Payment Interactions </h3>
                  <table class="table align-items-center table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interactionRecords}
                  </tbody>
                </table>                  
                </CardBody>

                <CardBody>
                <h3>Wash Room Access </h3>
                  <table class="table align-items-center table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Date</th>
                      <th scope="col">Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {washRecords}
                  </tbody>
                </table>                  
                </CardBody>

              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
