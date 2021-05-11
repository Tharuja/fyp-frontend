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

import GA_1  from "../../assets/videos/group/GA_1.mp4"
import GA_8  from "../../assets/videos/group/GA_8.mp4"
import GB_8  from "../../assets/videos/group/GB_8.mp4"
import GA_3  from "../../assets/videos/group/GA_3.mp4"
import GA_17  from "../../assets/videos/group/GA_17.mp4"


import Loading from "components/common/loading";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       allGroups: [],
       selectedVideo : GA_1,
       loading: true
      };
    this.handleClick = this.handleClick.bind(this)
  } 
  
  handleClick = (cameraName) => {
    //e.preventDefault();
    axios
      .get("http://localhost:4000/api/v1/groups/" + cameraName)
      .then(res => {
        const groups = res.data;
        this.setState({
          allGroups:groups,
          loading:groups.length > 0 ? false:true
        })
        //console.log(groups[0].amount)
      })
      .catch((e) => console.log(e));
    this.switchVideo(cameraName)
  }

  switchVideo = (cameraName) => {
    switch (cameraName) {
      case "GA_1":
        this.setState({ selectedVideo: GA_1 });
        break;

      case "GA_3":
        this.setState({ selectedVideo: GA_3 });
        break;

      case "GA_8":
        this.setState({ selectedVideo: GA_8 });
        break;
      
      case "GB_8":
        this.setState({ selectedVideo: GB_8 });
        break;

      case "GA_17":
        this.setState({ selectedVideo: GA_17 });
        break;  

      default:
        break;
    }
  };

  render() {

    const groupRecords = this.state.allGroups.map((groupRecord,index) =>
      <tr>
      <th scope="row">{index}</th>
      <td>{groupRecord.cctv_video_no}</td>
      <td>{groupRecord.group_id}</td>     
      <td>{groupRecord.group_type}</td>
      <td>{groupRecord.members_amount}</td>
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
                        outline={this.state.selectedVideo === GA_1 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("GA_1")}
                        size="lg"
                      > CCTV -GA-1 </Button>
                      <Button
                        outline={this.state.selectedVideo === GA_3 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("GA_3")}
                        size="lg"
                      > CCTV -GA-3 </Button>
                      <Button
                        outline={this.state.selectedVideo === GA_8 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("GA_8")}
                        size="lg"
                      > CCTV -GA-8 </Button>   
                      <Button
                        outline={this.state.selectedVideo === GA_17 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("GA_17")}
                        size="lg"
                      > CCTV -GA-17 </Button>   
                      <Button
                        outline={this.state.selectedVideo === GB_8 ? false : true}
                        color="danger"
                        href="#pablo"
                        onClick={() => this.handleClick("GB_8")}
                        size="lg"
                      > CCTV -GB-8 </Button>                                                                  
                </CardBody>

                <CardBody>
                <video src={this.state.selectedVideo} width="1000" height="600" controls="controls" autoplay="false" />
                </CardBody>

                <CardBody>
                <h3>Predicted Statistics </h3>
                {this.state.loading?
                  <Loading/> :
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
                }                   
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
