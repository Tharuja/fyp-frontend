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
import UserHeader from "components/Headers/GroupHeader.js";

import Video  from "../../assets/videos/cctv.mp4"

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       outputVideo:Video,
       allFoods: [],
       selectedVideo : "GA-1"
      };
    this.handleClick = this.handleClick.bind(this)
  } 
  
  handleClick(cameraName){
    //e.preventDefault();
    axios.get("http://localhost:4000/api/v1/foods/" + cameraName)
      .then(res => {
        const foods = res.data;
        this.setState({
          allFoods:foods,
          outputVideo:Video,  
          selectedVideo:cameraName
        })
        //console.log(foods[0].food_no)
      })
  }


  render() {

    const foodRecords = this.state.allFoods.map((foodRecord,index) =>
      <tr>
      <th scope="row">{index}</th>
      <td>{foodRecord.cctv_video_no}</td>
      <td>{foodRecord.food_type}</td>
      <td>{foodRecord.amount}</td>
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
                      <h3 className="mb-0">CCTV cameras for Group Detection</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                      <Button
                        outline={this.state.selectedVideo === "GA-1" ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("GA-1")}
                        size="lg"
                      > CCTV -GA-1 </Button>
                      <Button
                        outline={this.state.selectedVideo === "GA-2" ? false : true}
                        color="danger"
                        href="#pablo"
                        onClick={() => this.handleClick("GA-2")}
                        size="lg"
                      > CCTV -GA-3 </Button>
                      <Button
                        outline={this.state.selectedVideo === "GA-3" ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("GA-3")}
                        size="lg"
                      > CCTV -GA-3 </Button>                      
                </CardBody>

                <CardBody>
                <h3>Predicted Statistics </h3>
                <video src={this.state.outputVideo} width="800" height="400" controls="controls" autoplay="false" />
                </CardBody>

                <CardBody>
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
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
