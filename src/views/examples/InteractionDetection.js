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

// core components
import axios from "axios";
import UserHeader from "components/Headers/InteractionHeader.js";

import test1 from "../../assets/videos/payment interaction/test1.mp4";
import test2 from "../../assets/videos/payment interaction/outputnew_1.mp4";
import test3 from "../../assets/videos/payment interaction/outputnew_2.mp4";
import test4 from "../../assets/videos/payment interaction/payment_3.mp4";
import test5 from "../../assets/videos/payment interaction/test3.mp4";
import test6 from "../../assets/videos/payment interaction/test7.mp4";
import test7 from "../../assets/videos/payment interaction/test10.mp4";
import { API } from "api";
import InteractionTable from "components/interaction/table";
import Loading from "components/common/loading";

class Profile extends React.Component {
  state = {
    video: test1,
    selectedVideo: 1,
    data: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get(`${API}/interaction`)
      .then((res) => {
        this.setState({ data: res.data, loading: false });
      })
      .catch((e) => console.log(e));
  }
  switchVideo = (video) => {
    switch (video) {
      case "1":
        this.setState({ video: test1, selectedVideo: 1 });
        break;

      case "2":
        this.setState({ video: test2, selectedVideo: 2 });
        break;

      case "3":
        this.setState({ video: test3, selectedVideo: 3 });
        break;

      case "4":
        this.setState({ video: test4, selectedVideo: 4 });
        break;

      case "5":
        this.setState({ video: test5, selectedVideo: 5 });
        break;

      case "6":
        this.setState({ video: test6, selectedVideo: 6 });
        break;

      case "7":
        this.setState({ video: test7, selectedVideo: 7 });
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
                        CCTV cameras for Customer Interaction Detection
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
                  <Button
                    outline={selectedVideo === 7 ? false : true}
                    color="primary"
                    href="#pablo"
                    onClick={() => this.switchVideo("7")}
                    size="lg"
                  >
                    Video 7
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
                  {loading ? <Loading /> : <InteractionTable data={data} />}
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
