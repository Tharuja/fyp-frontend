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

import axios from "axios";

// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

// core components
import UserHeader from "components/Headers/SummaryReportHeader.js";

import FoodProgress from "./FoodProgress.js";
import GroupPie from "./GroupPie.js";
import { API } from "api";

class Profile extends React.Component {
  state = {
    allFoods: [],
    allGroups: [],
    allInteractions: [],
    allWash: [],
    allVehicle: [],
    allFace: [],
    avg: 0,
  };

  componentDidMount() {
    axios
      .get("https://team-xcion-backend.herokuapp.com/api/v1/foods")
      .then((res) => {
        const foods = res.data;
        this.setState({
          allFoods: foods,
        });
        //console.log(foods[0].food_no)
      })
      .catch((e) => console.log(e));

    axios
      .get("https://team-xcion-backend.herokuapp.com/api/v1/groups")
      .then((res) => {
        const groups = res.data;
        this.setState({
          allGroups: groups,
        });
        //console.log(groups[0].amount)
      })
      .catch((e) => console.log(e));
    axios
      .get("https://team-xcion-backend.herokuapp.com/api/v1/interaction")
      .then((res) => {
        const interactions = res.data;
        this.setState({
          allInteractions: interactions,
        });
        //console.log(foods[0].food_no)
      })
      .catch((e) => console.log(e));

    axios
      .get("https://team-xcion-backend.herokuapp.com/api/v1/washroom")
      .then((res) => {
        const wash = res.data;
        this.setState({
          allWash: wash,
        });
        //console.log(groups[0].amount)
      })
      .catch((e) => console.log(e));

    axios
      .get(`${API}/facedetection`)
      .then((res) => {
        this.setState({ allFace: res.data });
      })
      .catch((e) => console.log(e));

    axios
      .get(`${API}/vehicle`)
      .then((res) => {
        const arrayWithoutId = res.data.map((d) => {
          return { plate: d.plate, date: d.date, time: d.time };
        });
        const result = arrayWithoutId.sort(this.compare);

        const finalArray = [];
        let arrivalTime = "";
        let departureTime = "";
        for (let i = 0; i < result.length - 1; i++) {
          arrivalTime = new Date(result[i].date + " " + result[i].time);
          departureTime = "";
          for (let j = i + 1; j < result.length; j++) {
            if (result[i].plate === result[j].plate) {
              departureTime = new Date(result[j].date + " " + result[j].time);
            } else if (!departureTime) {
              i = j - 1;
              break;
            } else {
              finalArray.push({
                plate: result[i].plate,
                arrivalTime,
                departureTime,
                duration: departureTime - arrivalTime,
              });
              i = j - 1;
              break;
            }
          }
        }
        let avg = 0;
        finalArray.forEach((element) => {
          avg += element.duration;
        });
        this.setState({ allVehicle: finalArray, avg });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const foodRecords = this.state.allFoods.map((foodRecord, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{foodRecord.cctv_video_no}</td>
        <td>{foodRecord.food_type}</td>
        <td>{foodRecord.amount}</td>
      </tr>
    ));

    const groupRecords = this.state.allGroups.map((groupRecord, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{groupRecord.cctv_video_no}</td>
        <td>{groupRecord.group_id}</td>
        <td>{groupRecord.group_type}</td>
        <td>{groupRecord.members_amount}</td>
      </tr>
    ));

    const interactionRecords = this.state.allInteractions.map(
      (interactionRecord, index) => (
        <tr>
          <th scope="row">{index}</th>
          <td>{interactionRecord.date}</td>
          <td>{interactionRecord.time}</td>
        </tr>
      )
    );

    const washRecords = this.state.allWash.map((washRecord, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{washRecord.date}</td>
        <td>{washRecord.gender}</td>
      </tr>
    ));

    const vehicleRecords = this.state.allVehicle.map((vehicleRecord, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{vehicleRecord.plate}</td>
        <td>{vehicleRecord.arrivalTime.toString()}</td>
        <td>{vehicleRecord.departureTime.toString()}</td>
        <td>{(vehicleRecord.duration / 60000).toFixed(2)}</td>
      </tr>
    ));

    const faceRecords = this.state.allFace.map((faceRecord, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{faceRecord.person_id}</td>
        <td>{faceRecord.type}</td>
        <td>
          {faceRecord.cctv.map((c) => (
            <p>{c}</p>
          ))}
        </td>
        <td>
          {faceRecord.date.map((d) => (
            <p>{d}</p>
          ))}
        </td>
        <td>
          {faceRecord.time.map((t) => (
            <p>{t}</p>
          ))}
        </td>
      </tr>
    ));

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
                  <h3>Customer Types </h3>
                  <GroupPie data={this.state.allGroups} /> <br />
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
                    <tbody>{groupRecords}</tbody>
                  </table>
                </CardBody>

                <CardBody>
                  <h3>Ordered Food Items </h3>
                  <FoodProgress data={this.state.allFoods} />
                  <table class="table align-items-center table-dark">
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Camera No</th>
                        <th scope="col">Food Type</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </thead>
                    <tbody>{foodRecords}</tbody>
                  </table>
                </CardBody>

                <CardBody>
                  <h3>
                    Payment Interactions (Total = {interactionRecords.length}){" "}
                  </h3>
                  <table class="table align-items-center table-dark">
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>{interactionRecords}</tbody>
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
                    <tbody>{washRecords}</tbody>
                  </table>
                </CardBody>

                <CardBody>
                  <h3>
                    Vehicle Arrival and departure (Average ={" "}
                    {(
                      this.state.avg /
                      (60000 * this.state.allVehicle.length)
                    ).toFixed(2)}{" "}
                    mins)
                  </h3>
                  <table class="table align-items-center table-dark">
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Number Plate</th>
                        <th scope="col">Arrival Time</th>
                        <th scope="col">Departure Time</th>
                        <th scope="col">Duration (mins)</th>
                      </tr>
                    </thead>
                    <tbody>{vehicleRecords}</tbody>
                  </table>
                </CardBody>
                <CardBody>
                  <h3>Customer arrival</h3>
                  <table class="table align-items-center table-dark">
                    <thead>
                      <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Person Id</th>
                        <th scope="col">Type</th>
                        <th scope="col">CCTV</th>
                        <th scope="col">Time</th>
                      </tr>
                    </thead>
                    <tbody>{faceRecords}</tbody>
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
