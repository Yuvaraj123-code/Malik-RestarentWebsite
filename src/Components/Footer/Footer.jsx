import React from 'react'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import logo from "../../Assets/images/res-logo.png"
import './Footer.css'
import {Link} from "react-router-dom"



const Footer = () => {
  return <footer className='footer'>
    <Container>
        <Row>
            <Col lg='3' md='4' sm='6' >
            <div className="logo footer__logo text-start">
            <img src={logo}  alt="logo"/>
            <h5>Malik Biriyani</h5>
            <p> Our Malik Biriyani is a culinary haven for food lovers, offering an exquisite fusion of international flavors with a focus on fresh. </p>
            </div>
            </Col>

            <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
                <ListGroupItem className=' delivery__time-item  border-0 ps-0' >
                    <span>Sunday - Thursday</span>
                    <p>10:00Am - 11:00Pm</p>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item   border-0 ps-0'>
                    <span>Friday - Saturday</span>
                    <p> Off Day </p>
                </ListGroupItem>
            </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
            <ListGroupItem className=' delivery__time-item  border-0 ps-0' >
                    <p>Location : Villivakam-600101,Chennai,India</p>
                    <p></p>
                </ListGroupItem>
                <ListGroupItem className=' delivery__time-item  border-0 ps-0' >
                    <span>Phone : +91-6309376010</span>
                    <p></p>
                </ListGroupItem>

                <ListGroupItem className='delivery__time-item   border-0 ps-0'>
                    <span>Email : urajys1430@gmail.com</span>
                    <p>  </p>
                </ListGroupItem>
            </ListGroup>
            </Col>

            <Col lg='3' md='4' sm='6' >
            <h5 className='footer__title'>Newsletter</h5>
           <p>Subscribe our newsletter</p>
           <div className="newsletter">
            <input type="email" placeholder='Enter your Email' />
            <span><i class="ri-send-plane-fill"></i></span>
           </div>
            </Col>

            
            
        </Row>

        <Row className='mt-5'>
            <Col lg='6' md='6' >
            <p className='copyright__text'> Copyright - 2024, Website made by Yuvaraj.  All Rights Reserved.</p>
            </Col>

            <Col lg='6' md='6'>
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
             <p className='m-0'> Follow: </p>

             <span><Link to=''><i class="ri-facebook-circle-fill"></i></Link></span>
             <span><Link to=''><i class="ri-github-fill"></i> </Link></span>
             <span><Link to=''> <i class="ri-linkedin-box-fill"></i></Link></span>
             <span><Link to=''><i class="ri-instagram-fill"></i> </Link></span>

            </div>
            </Col>

        </Row>
    </Container>
  </footer>
}

export default Footer