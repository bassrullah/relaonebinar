import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/_style.scss';
import bluelogo from '../assets/images/blue-logo.png';
import { Link as Links } from 'react-router-dom';
import { Link } from "react-scroll";
import playstorebutton from '../assets/images/get-it-on-the-google-play-store-button.png';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF, faTwitter, faInstagram); 

class Footer extends Component {
  render() {

    let token = localStorage.getItem('token');

    const takeAction = (token === null) ? (
      <Col lg="2" className="footer-content">
      <p className="bold-text">TAKE ACTION</p>
      <p className="footer-links"><Links className="footer-links" exact="true" to="/find-activity">Join Event</Links></p>
      <p className="footer-links"><Links className="footer-links" exact="true" to="/find-volunteer">Find Volunteer</Links></p>
      </Col>
    ) : (
      <Col lg="2" className="footer-content"></Col>      
    )

    return (
      <div className="footer-landingpage">
         <Container>
             <Row>
                <Col lg="3">
                    <img src={bluelogo} alt = "RelaOne Logo"/> 
                </Col>
                <Col lg="4"></Col>
                <Col lg="5">
                  <div>
                    <p >Find us on : 
                      <a href = "https://www.facebook.com/" target = "_blank" rel="noopener noreferrer"> 
                        <FontAwesomeIcon className="footer-socmed-icon" icon={['fab', 'facebook-f']}/>
                      </a>
                      <a href = "https://www.twitter.com/" target = "_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="footer-socmed-icon" icon={['fab', 'twitter']}/>
                      </a>
                      <a href = "https://www.instagram.com/" target = "_blank" rel="noopener noreferrer"> 
                        <FontAwesomeIcon className="footer-socmed-icon" icon={['fab', 'instagram']}/>
                      </a>
                      <a href = "https://play.google.com/store" target = "_blank" rel="noopener noreferrer"> 
                        <img className="footer-button" src={playstorebutton} alt="get it on playstore"/>
                      </a>
                    </p>
                  </div>
                </Col>
            </Row>
            <Row className="footer-content-all">
              <Col lg="4" className="footer-content">
                <p>{this.props.footerDesc}</p>
                <p>{this.props.footerLocation}</p>
              </Col>
              <Col lg="2"></Col>
              
                {takeAction}
              
              <Col lg="2" className="footer-content">
                <p className="bold-text">LEARN MORE</p>
                <p><Link
                    to="how-to-join"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >How to Join</Link></p>
                <p className="footer-links"><Links to="/terms" target="_blank" rel="noopener noreferrer" className="footer-links">Term and Condition</Links></p>
              </Col>
              <Col lg="2" className="footer-content">
                <p className="bold-text">CONNECT</p>
                <p><Link
                    to="contact-us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                >Contact Us</Link></p>
              </Col>
            </Row>
             <Row>
               <p className="footer-copyright">Copyright © 2019 RelaOne All Rights Reserved</p>
             </Row>
         </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    footerDesc: state.landingPage.footerDesc,
    footerLocation: state.landingPage.footerLocation
  }
}

export default connect(mapStateToProps)(Footer);

