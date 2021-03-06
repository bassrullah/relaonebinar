import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import bluelogo from '../assets/images/blue-logo.png';
import inbox from '../assets/images/inbox.png';
import '../assets/css/_style.scss';
import { Link as Links} from 'react-router-dom';

class RegisterSuccess extends Component {
  render() {
    return (
      <div className="register-success">
        <Container>
            <Row>
                <div className="logo-center">
                  <Links to="/">
                    <img src={bluelogo} alt="RelaOne Logo"></img>
                  </Links>
                </div>
            </Row>
            <Row>
              <Col md="2"></Col>
              <Col md="8">
                <div className="register-success-content">
                  <img src={inbox} alt="check your email" className="icon-success"></img>
                  <h3>Thank you for registering.</h3>
                  <p>Please check your inbox and click the link emailed to you.</p>
                </div>
              </Col>
            </Row>
        </Container>
    </div>
    )
  }
}

export default RegisterSuccess;

