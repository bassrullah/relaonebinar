import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../assets/css/_style.scss';
import Header from '../layout/Header'
import ProfileBadge from '../layout/ProfileBadge'
import SideNavBar from '../layout/SideNavBar'
import Dashboard from '../layout/Dashboard'

export default class DashboardPage extends Component {
  render() {
    return (
      <div className="dashboard">
      <Container>
      <Row>
          <Header/>
      </Row>
      <Row>
            <Col sm="12" md="4">
              <ProfileBadge></ProfileBadge>
              <SideNavBar></SideNavBar>
            </Col>
            <Col sm="12" md="8">
              <Dashboard/>
            </Col>
          </Row>
      </Container>
      </div>
    )
  }
}