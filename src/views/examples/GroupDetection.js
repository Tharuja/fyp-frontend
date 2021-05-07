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
       outputVideo:Video
      };
    this.handleClick = this.handleClick.bind(this)
  } 
  
  handleClick(inputVideo){
    //e.preventDefault();
    this.setState({
      outputVideo:Video  // get the output video for the input video
    })
  }


  render() {
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
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("CCTV -G1")}
                        size="lg"
                      > CCTV -G1 </Button>
                      <Button
                        color="danger"
                        href="#pablo"
                        onClick={() => this.handleClick("CCTV -G1")}
                        size="lg"
                      > CCTV -G2 </Button>
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("CCTV -G3")}
                        size="lg"
                      > CCTV -G3 </Button>                      
                </CardBody>

                <CardBody>
                <h3>Predicted Statistics </h3>
                <video src={this.state.outputVideo} width="800" height="400" controls="controls" autoplay="false" />
                </CardBody>

                <CardBody>
                <table class="table align-items-center table-dark">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
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
