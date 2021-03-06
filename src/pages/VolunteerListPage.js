import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import ProfileBadge from '../layout/ProfileBadge';
import Header from '../layout/Header';
import VolunteerList from '../components/VolunteerList';
import OrganizationSideBar from '../layout/OrganizationSideBar';

class VolunteerListPage extends Component {
  render() {
    return (
      <div className="create-event">
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <Col sm="12" md="4">
              <ProfileBadge/>
              <OrganizationSideBar/>
            </Col>
            <Col sm="12" md="8">
              <VolunteerList/>
            </Col>
          </Row>
        </Container>      
      </div>
    )
  }
}

export default VolunteerListPage;

