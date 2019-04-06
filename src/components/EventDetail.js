import React, { Component } from 'react'
import { Card, Row, Col, CardImg, CardBody, CardTitle, CardText, Pagination, PaginationItem, PaginationLink, Button } from 'reactstrap'
import Banjir from '../assets/images/event/banjir.jpg'

export default class EventDetail extends Component {
  render() {
    return (
    <div>
      <div className="content">
          <h5 className="bold-text">Event</h5>
      </div>
      <div>
      <Card>
          <Row>
            <Col md="4">
                <CardImg className="article-image" src={Banjir} alt="article-1"></CardImg>
            </Col>
            <Col md="8">
                <CardBody>
                    <CardTitle><h4>Bantu Banjir Bandang Yang Melanda Papua!</h4></CardTitle>
                    <CardText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam non error officiis soluta necessitatibus nemo.</CardText>
                    <CardText className="text-muted">Created by Mitra Tarigan</CardText>
                </CardBody>
            </Col>
          </Row>
      </Card>
      </div>
      <div className="content">
          <h5 className="bold-text">Article</h5>
      </div>
      <div>
          <Row>
              <Col xs="6">
                <Card>
                    <CardImg src={Banjir}/>
                    <CardBody>
                    <CardTitle><h4>Cara Ampuh Mencegah Banjir Dari Disini!</h4></CardTitle>
                    <CardText className="text-muted">Created by Raymond</CardText>
                    <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro animi laborum, iusto debitis sint veniam.</CardText>
                    <Button color="primary">Read More</Button>
                    </CardBody>
                </Card>
              </Col>
              <Col xs="6">
                <Card>
                    <CardImg src={Banjir}/>
                    <CardBody>
                    <CardTitle><h4>Cara Ampuh Mencegah Banjir Dari Disini!</h4></CardTitle>
                    <CardText className="text-muted">Created by Raymond</CardText>
                    <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro animi laborum, iusto debitis sint veniam.</CardText>
                    <Button color="primary">Read More</Button>
                    </CardBody>
                </Card> 
              </Col>
          </Row>
          </div>
          <div>
          <br></br>
          <Pagination aria-label="Page navigation example">
      <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
      </div>
      </div>
    )
  }
}
