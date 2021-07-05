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
import UserHeader from "components/Headers/VehicleHeader.js";

import test1 from "../../assets/videos/vehicle/vehicle_1.mp4";
import { API } from "api";
import Loading from "components/common/loading";
import VehicleTable from "components/vehicle/table";

class Profile extends React.Component {
  state = {
    video: test1,
    selectedVideo: 1,
    data: [],
    loading: true,
  };

  compare = (a, b) => {
    if (a.plate < b.plate) {
      return -1;
    }
    if (a.plate > b.plate) {
      return 1;
    }
    return 0;
  };

  componentDidMount() {
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
        this.setState({ data: finalArray, loading: false });
      })
      .catch((e) => console.log(e));
  }

  switchVideo = (video) => {
    switch (video) {
      case "1":
        this.setState({ video: test1, selectedVideo: 1 });
        break;

      // case "2":
      //   this.setState({ video: test2, selectedVideo: 2 });
      //   break;

      // case "3":
      //   this.setState({ video: test3, selectedVideo: 3 });
      //   break;

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
                        CCTV cameras for Vehicle parking detection
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
                  {/* <Button
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
                  </Button> */}
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
                  {loading ? <Loading /> : <VehicleTable data={data} />}
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
