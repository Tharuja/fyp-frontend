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
import {Container, Row, Col } from "reactstrap";

class GroupHeader extends React.Component {
  render() {
    return (
      <>
        <div
          className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
          style={{
            minHeight: "600px",
            backgroundImage:
              "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          {/* Mask */}
          <span className="mask bg-gradient-default opacity-6" />
          {/* Header container */}
          <Container className="d-flex align-items-center" fluid>
            <Row>
              <Col lg="10" md="10">
                <h1 className="display-2 text-white">Customer Type</h1>
                <p className="text-white mt-0 mb-5">
                How customers arrive at the restaurant...whether as groups, couples, or individuals..                   
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default GroupHeader;
