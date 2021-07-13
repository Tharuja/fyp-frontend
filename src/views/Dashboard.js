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
// node.js library that concatenates classes (strings)
// import classnames from "classnames";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components
// import { Player } from 'video-react';
// import "../../node_modules/video-react/dist/video-react.css"; // import css

import GA_17 from "../assets/videos/group/GA_17.mp4";
import face_detection_1 from "../assets/videos/face detection/face_detection_1.mp4";
import washroom_1 from "../assets/videos/washroom/washroom_1.mp4";
import payment_1 from "../assets/videos/payment interaction/test1.mp4";
import vehicle_1 from "../assets/videos/vehicle/vehicle_1.mp4";
import FA_44 from "../assets/videos/food/FA_44.mp4";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        { src: GA_17, name: "CCTV -GA17" },
        { src: FA_44, name: "CCTV -FA44" },
        { src: face_detection_1, name: "CCTV -FA2" },
        { src: washroom_1, name: "CCTV -FA3" },
        { src: payment_1, name: "CCTV -G4" },
        { src: vehicle_1, name: "CCTV -G5" },
      ],
    };
  }

  render() {
    const vidoeList = this.state.videos.map((video) => (
      <Col>
        {/* <Player
          playsInline
          poster={video.poster}
          src={video.src}
        /> */}
        <video
          src={video.src}
          width="400"
          height="300"
          controls="controls"
          autoplay="false"
        />
        <Button className="my-4" color="Secondary" type="button">
          {" "}
          {video.name}{" "}
        </Button>
      </Col>
    ));

    return (
      <>
        {/* Video List */}
        <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              <h1>CCTV Videos in the Restaurant</h1>
              <Row>{vidoeList}</Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Index;
