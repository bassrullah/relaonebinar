import React, { Component } from 'react'
<<<<<<< HEAD
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem, Badge} from 'reactstrap'
=======
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap'
>>>>>>> 9c11f96be08b61bff1494939e60ffe20110c2603
import test from '../assets/images/certemplate.jpg'
import '../assets/css/_style2.scss'

<<<<<<< HEAD
=======
import '../assets/css/_style2.scss'
>>>>>>> 9c11f96be08b61bff1494939e60ffe20110c2603

export default class UserCertificationDetails extends Component {
  render() {
    return (
      <div>
        <Card>
            <CardBody>
              <CardTitle>Nama Event Sumbangan untuk rakyat jelata negara +62</CardTitle>
              <hr/ >
              <CardImg top width="100%" src={test} alt="Card image cap" />
              <hr />
              <CardSubtitle className="text-center">Judul</CardSubtitle>
              <CardSubtitle className="text-center">Peran</CardSubtitle>
              <CardSubtitle className="text-center">Lokasi</CardSubtitle>
              <CardSubtitle className="text-center">Tanggal</CardSubtitle>
              
              <div className="d-flex justify-content-center align-items-center my-3">
                <Button color='primary' className="">Save as PDF</Button>
                <p className="mx-5">or</p>
                <Button color='primary'>PRINT OUT</Button>
              </div>
              
            </CardBody>
          </Card>
      </div>
    )
  }
}
