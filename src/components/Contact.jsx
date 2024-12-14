import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from "react-bootstrap/Button";

export default function Contact() {
  useEffect(()=>{
    AOS.init({
      duration:500
    });
},[]);
  return (
    <div
      className="container-fluid mt-3 rounded"
      id='contact'
    >
        <div className="container" style={{ backgroundColor: "#e8edf0" }}>

        
      <div className="row " data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='100'>
        <div className="col-sm-12 mt-3 col-md-7">
          <h1 style={{color:'rgb(237, 84, 52)'}}>Contact Us</h1>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="First name" type="text" required />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" type="text" required />
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Form.Control
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder="Mobile Number"
                  type="number"
                  required
                />
              </Col>
            </Row>
            <Form.Group
              className="mb-3 mt-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Write your message here..."
                rows={3}
                required
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" className="text-center" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="col-sm-12 mt-2 p-2 col-md-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1733925716573!5m2!1sen!2sin"
            height="400"
            className="rounded"
            style={{
              border: 0,
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
              width: "100%",
            }}
          ></iframe>
        </div>
      </div>
      </div>
      <div className="container-fluid mt-3" data-aos='fade-up'
        data-aos-offset='200'
        data-aos-delay='50'>
        <div className="row">
          <div className="col-sm-6 col-md-3 col-lg-3 text-black rounded mt-2 mb-2">
            <Row className="justify-content-center bg-light effect">
              <Col xs="auto" className="text-center">
                <div className="image-container mt-2">
                  <img
                    src="/location.jpg"
                    alt="Shild Image"
                    className="img-fluid rounded cardImg"
                    style={{ width: "50%" }}
                  />
                  <h5 className="mt-3">
                    Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                    723156
                  </h5>
                </div>
              </Col>
            </Row>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 text-black rounded mt-2 mb-2">
            <Row className="justify-content-center bg-light effect">
              <Col xs="auto" className="text-center">
                <div className="image-container mt-2">
                  <img
                    src="/contact.png"
                    alt="Shild Image"
                    className="img-fluid rounded cardImg"
                    style={{ width: "50%" }}
                  />
                  <h5 className="mt-3">+91 9007062180</h5>
                </div>
              </Col>
            </Row>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 text-black rounded mt-2 mb-2">
            <Row className="justify-content-center bg-light effect">
              <Col xs="auto" className="text-center">
                <div className="image-container mt-2">
                  <img
                    src="/email.png"
                    alt="Shild Image"
                    className="img-fluid rounded cardImg"
                    style={{ width: "50%" }}
                  />
                  <h5 className="mt-3">kkghosh0099@gmail.com</h5>
                </div>
              </Col>
            </Row>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 text-black rounded mt-2 mb-2">
            <Row className="justify-content-center bg-light effect">
              <Col xs="auto" className="text-center">
                <div className="image-container mt-2">
                  <img
                    src="https://img.freepik.com/premium-vector/world-map-with-globe_1203700-153.jpg?uid=R122775805&ga=GA1.1.1839631008.1733813785&semt=ais_hybrid"
                    alt="Shild Image"
                    className="img-fluid cardImg rounded"
                    style={{ width: "50%" }}
                  />
                  <h5 className="mt-3">kingsukhguesthouse.com</h5>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
