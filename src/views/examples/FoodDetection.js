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
import UserHeader from "components/Headers/FoodHeader.js";

import FA_50  from "../../assets/videos/food/FA_50.mp4"
import FA_71  from "../../assets/videos/food/FA_71.mp4"
import FA_102  from "../../assets/videos/food/FA_102.mp4"
import FA_152  from "../../assets/videos/food/FA_152.mp4"
import FB_12  from "../../assets/videos/food/FB_12.mp4"
import FB_15  from "../../assets/videos/food/FB_15.mp4"
import FC_3  from "../../assets/videos/food/FC_3.mp4"
import FC_30  from "../../assets/videos/food/FC_30.mp4"

import Loading from "components/common/loading";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       allFoods: [],
       selectedVideo : FA_71,
       loading: true
      };
    this.handleClick = this.handleClick.bind(this)
  } 

  handleClick = (cameraName) => {
    //e.preventDefault();
    axios
      .get("http://localhost:4000/api/v1/foods/" + cameraName)
      .then(res => {
        const foods = res.data;
        this.setState({
          allFoods:foods,
          loading:foods.length > 0 ? false:true
        })
        //console.log(foods[0].food_no)
      })
      .catch((e) => console.log(e));
    this.switchVideo(cameraName)
  }

  switchVideo = (cameraName) => {
    switch (cameraName) {
      case "FA_50":
        this.setState({ selectedVideo: FA_50 });
        break;

      case "FA_71":
        this.setState({ selectedVideo: FA_71 });
        break;

      case "FA_102":
        this.setState({ selectedVideo: FA_102 });
        break;

      case "FA_152":
        this.setState({ selectedVideo: FA_152 });
        break;

      case "FB_12":
        this.setState({ selectedVideo: FB_12 });
        break;

      case "FB_15":
        this.setState({ selectedVideo: FB_15 });
        break;

      case "FC_3":
        this.setState({ selectedVideo: FC_3 });
        break;  

      case "FC_30":
        this.setState({ selectedVideo: FC_30 });
        break;  

      default:
        break;
    }
  };

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
                      <h3 className="mb-0">CCTV cameras for Food Detection</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                      <Button
                        outline={this.state.selectedVideo === FA_71 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("FA_71")}
                        size="lg"
                      > CCTV -FA-71 </Button>
                      <Button
                        outline={this.state.selectedVideo === FA_50 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("FA_50")}
                        size="lg"
                      > CCTV -FA-50 </Button>
                      <Button
                        outline={this.state.selectedVideo === FA_102 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("FA_102")}
                        size="lg"
                      > CCTV -FA-102 </Button>      
                      <Button
                        outline={this.state.selectedVideo === FA_152 ? false : true}
                        color="primary"
                        href="#pablo"
                        onClick={() => this.handleClick("FA_152")}
                        size="lg"
                      > CCTV -FA-152 </Button>                       
                      <Button
                        outline={this.state.selectedVideo === FB_12 ? false : true}
                        color="danger"
                        href="#pablo"
                        onClick={() => this.handleClick("FB_12")}
                        size="lg"
                      > CCTV -FB-12 </Button>
                      <Button
                        outline={this.state.selectedVideo === FB_15 ? false : true}
                        color="danger"
                        href="#pablo"
                        onClick={() => this.handleClick("FB_15")}
                        size="lg"
                      > CCTV -FB-15 </Button>
                      <Button
                        outline={this.state.selectedVideo === FC_3 ? false : true}
                        color="success"
                        href="#pablo"
                        onClick={() => this.handleClick("FC_3")}
                        size="lg"
                      > CCTV -FC-3 </Button>
                      <Button
                        outline={this.state.selectedVideo === FC_30 ? false : true}
                        color="success"
                        href="#pablo"
                        onClick={() => this.handleClick("FC_30")}
                        size="lg"
                      > CCTV -FC-30 </Button>

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
                      <th scope="col">Food Type</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodRecords}
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
