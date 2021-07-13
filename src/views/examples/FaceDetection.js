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
  Col,
} from "reactstrap";
import axios from "axios";
// core components
import UserHeader from "components/Headers/FaceHeader.js";

import face_detection_1 from "../../assets/videos/face detection/face_detection_1.mp4";
import face_detection_2 from "../../assets/videos/face detection/face_detection_2.mp4";
import face_detection_3 from "../../assets/videos/face detection/face_detection_3.mp4";
import face_detection_4 from "../../assets/videos/face detection/face_detection_4.mp4";
import face_detection_5 from "../../assets/videos/face detection/face_detection_5.mp4";
import face_detection_6 from "../../assets/videos/face detection/face_detection_6.mp4";
import { API } from "api";
import Loading from "components/common/loading";
import FaceDetectionTable from "../../components/faceDetection/table";
import "../../assets/css/faceDetection.css";
class Profile extends React.Component {
  state = {
    video: face_detection_1,
    selectedVideo: 1,
    data: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get(`${API}/facedetection`)
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch((e) => console.log(e));
  }

  switchVideo = (video) => {
    switch (video) {
      case "1":
        this.setState({ video: face_detection_1, selectedVideo: 1 });
        break;

      case "2":
        this.setState({ video: face_detection_2, selectedVideo: 2 });
        break;

      case "3":
        this.setState({ video: face_detection_3, selectedVideo: 3 });
        break;

      case "4":
        this.setState({ video: face_detection_4, selectedVideo: 4 });
        break;

      case "5":
        this.setState({ video: face_detection_5, selectedVideo: 5 });
        break;

      case "6":
        this.setState({ video: face_detection_6, selectedVideo: 6 });
        break;

      default:
        break;
    }
  };

  render() {
    const { video, selectedVideo, loading, data } = this.state;
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
                      <h3 className="mb-0">
                        CCTV cameras for Face detection and recognition
                      </h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Button
                    outline={selectedVideo === 1 ? false : true}
                    color="primary"
                    href="#pablo"
                    onClick={() => this.switchVideo("1")}
                    size="lg"
                  >
                    Video 1
                  </Button>
                  <Button
                    outline={selectedVideo === 2 ? false : true}
                    color="danger"
                    href="#pablo"
                    onClick={() => this.switchVideo("2")}
                    size="lg"
                  >
                    Video 2
                  </Button>
                  <Button
                    outline={selectedVideo === 3 ? false : true}
                    color="success"
                    href="#pablo"
                    onClick={() => this.switchVideo("3")}
                    size="lg"
                  >
                    Video 3
                  </Button>

                  <Button
                    outline={selectedVideo === 4 ? false : true}
                    color="primary"
                    href="#pablo"
                    onClick={() => this.switchVideo("4")}
                    size="lg"
                  >
                    Video 4
                  </Button>

                  <Button
                    outline={selectedVideo === 5 ? false : true}
                    color="success"
                    href="#pablo"
                    onClick={() => this.switchVideo("5")}
                    size="lg"
                  >
                    Video 5
                  </Button>

                  <Button
                    outline={selectedVideo === 6 ? false : true}
                    color="danger"
                    href="#pablo"
                    onClick={() => this.switchVideo("6")}
                    size="lg"
                  >
                    Video 6
                  </Button>
                </CardBody>

                <CardBody>
                  <video
                    src={video}
                    width="800"
                    height="400"
                    controls="controls"
                    autoPlay={true}
                  />
                </CardBody>

                <CardBody>
                  <h3>Predicted Statistics </h3>
                  {loading ? <Loading /> : <FaceDetectionTable data={data} />}
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
