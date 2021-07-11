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

import test1 from "../../assets/videos/payment interaction/payment_1.mp4";
import test2 from "../../assets/videos/payment interaction/payment_2.mp4";
import test3 from "../../assets/videos/payment interaction/payment_8.mp4";
import test4 from "../../assets/videos/payment interaction/payment_3.mp4";
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
