import React, { useEffect } from "react";
import { FaShower } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { RiFirstAidKitLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import Button from "react-bootstrap/Button";
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Rooms() {
  useEffect(()=>{
    AOS.init({
      duration:500
    });
  },[]);
  return (
    <div
      className="container-fluid mt-3"
      id="rooms"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container-fluid mt-2">
        <h3 style={{color:'rgb(237, 84, 52)'}} className="customText">OUR LIVING ROOM</h3>
        <br/>
        <h5>The Most Memorable Rest</h5>
        <h5>Time Starts Here.</h5>
        <div className="container mt-4">
          <div className="container mt-2 p-2" data-aos="fade-up"
          data-aos-offset="200" data-aos-delay="100">
            <div className="row">
            <div className="col-md-6 col-sm-12 mt-2 p-2 order-1 order-md-2">
                <img src="small.jpg" className="img-fluid custom_Img mt-4" />
            </div>

              <div className="col-md-6 mt-2 p-md-5 p-1 col-sm-12 order-2 order-md-1">
                <h4>Cozy Haven Room</h4>
                <h6 style={{ color: "#555" }}>
                  Escape to comfort in our Cozy Haven Room, a snug retreat
                  designed for intimate relaxation.
                </h6>
                <h5 style={{ color: "#555" }}>
                  Starting from{" "}
                  <strong className="text-black">Rs. 1000/night</strong>
                </h5>
                <div className="icon-container">
                  <FaShower
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Shower"
                  />
                  <FaTv
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Television"
                  />
                  <FaWifi
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="WiFi"
                  />
                  <RiFirstAidKitLine
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Safe Box"
                  />
                </div>
                <Tooltip id="my-tooltip" />
                <a href="https://api.whatsapp.com/send?phone=919007062180" target="_blank">
                <Button className="mt-2" variant="outline-success">
                  Book Now
                </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="container" data-aos="fade-up"
          data-aos-offset="200" data-aos-delay="200">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <img src="large.jpg" className="img-fluid custom_Img mt-4" />
              </div>
              <div className="col-md-6 col-sm-12 p-md-5 p-1">
                <h4>Spacious Serenity Suite</h4>
                <h6 style={{ color: "#555" }}>
                  Indulge in luxury and ample space in our Spacious Serenity
                  Suite, where tranquility meets roomy elegance.
                </h6>
                <h5 style={{ color: "#555" }}>
                  Starting from{" "}
                  <strong className="text-black">Rs. 1500/night</strong>
                </h5>
                <div className="icon-container">
                  <FaShower
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Shower"
                  />
                  <FaTv
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Television"
                  />
                  <FaWifi
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="WiFi"
                  />
                  <RiFirstAidKitLine
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Safe Box"
                  />
                </div>
                <Tooltip id="my-tooltip" />
                <a href="https://api.whatsapp.com/send?phone=919007062180" target="_blank">
                <Button className="mt-2" variant="outline-success">
                  Book Now
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
