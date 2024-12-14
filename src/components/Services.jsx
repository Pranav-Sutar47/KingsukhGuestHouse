import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Services() {
    useEffect(()=>{
        AOS.init({
            duration:500
        });
    },[]);
    return (
        <div className='container-fluid' id='services'>
            <h3 style={{color:'rgb(237, 84, 52)'}} className='customText mt-3'>SERVICES</h3>
            <br/>
            <h5>Strive Only For The Best.</h5>
            <div className='row' data-aos='fade-up' data-aos-delay='100' data-aos-offset='200'>
                <div className='col-sm-6 col-md-3 col-lg-3 bg-light text-black rounded mt-2 mb-2 effect'>
                    <Row className="justify-content-center">
                        <Col xs="auto" className="text-center">
                            <div className="image-container mt-2">
                                <img
                                    src="/shild.jpg"
                                    alt="Shild Image"
                                    className="img-fluid rounded cardImg"
                                    //style={{ width: '70%' }}
                                />
                                <h5 className="mt-3">High Class Security
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 text-black bg-light rounded mt-2 mb-2 effect'>
                    <Row className="justify-content-center">
                        <Col xs="auto" className="text-center">
                            <div className="image-container mt-2">
                                <img
                                    src="/hour.jpg"
                                    alt="Shild Image"
                                    className="img-fluid rounded cardImg"
                                    //style={{ width: '70%' }}
                                />
                                <h5 className="mt-3">24 Hours Room Service
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 bg-light text-black rounded mt-2 mb-2 effect'>
                    <Row className="justify-content-center">
                        <Col xs="auto" className="text-center">
                            <div className="image-container mt-2">
                                <img
                                    src="/restaurant.jpg"
                                    alt="Shild Image"
                                    className="img-fluid rounded cardImg"
                                    // style={{ width: '70%' }}
                                />
                                <h5 className="mt-3">Restaurant
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='col-sm-6 col-md-3 col-lg-3 bg-light text-black rounded mt-2 mb-2 effect'>
                    <Row className="justify-content-center">
                        <Col xs="auto" className="text-center">
                            <div className="image-container mt-2">
                                <img
                                    src="/map.jpg"
                                    alt="Shild Image"
                                    className="img-fluid cardImg rounded"
                                />
                                <h5 className="mt-3">Tourist Guide Support
                                </h5>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='mt-5 container rounded mb-5' style={{backgroundColor:'#e8edf0'}}>
                <div className='row'>
                    <div className='col-6 text-center'>
                        <h1>100+</h1>
                        <h6 style={{color:'#999'}}>Bookings Completed</h6>
                    </div>
                    <div className='col-6 text-center'>
                        <h1>150+</h1>
                        <h6 style={{color:'#999'}}>Happy Customers</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
