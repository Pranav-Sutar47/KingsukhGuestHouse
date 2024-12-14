import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function About() {
    useEffect(()=>{
        AOS.init({
            duration:1500
        });
    },[]);
    return (
        <div className='container-fluid mt-5' id='about'>
            <h2 className='text-center mt-3' style={{ color: '#ed5434' }}>WELCOME TO KINGSUKH GUEST HOUSE</h2>
            <h3 className='text-center' style={{ color: '#555' }}>The Best Holidays Start Here!</h3>
            <p style={{ color: '#555', fontSize: '18px' }} className='text-center'>
                Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill,
                Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and
                the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals,
                and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend
                of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
            </p>
            <div className='container-fluid mt-5' data-aos="fade-up"
          data-aos-offset="200" data-aos-delay="200">
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div className="position-relative">
                            <img src='/guesthouse.jpg' className='img-fluid rounded' alt="Guest House" />
                            <span className='position-absolute bottom-0 start-0 p-3 text-white bg-dark opacity-75' style={{ width: '100%' ,zIndex:1}}>
                                KingSukh Guest House
                            </span>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12 mt-1'>
                        <div className='col-12'>
                            <div className="position-relative">
                                <img src='/large.jpg' className='img-fluid rounded' alt="Guest House" />
                                <span className='position-absolute bottom-0 start-0 p-3 text-white bg-dark opacity-75' style={{ width: '100%' ,zIndex:1}}>
                                    Large Bedroom
                                </span>
                            </div>
                        </div>
                        <div className='row mt-1'>
                            <div className='col-6'>
                                <div className="position-relative">
                                    <img src='/hall.jpg' style={{height:'300px'}} className='img-fluid object-fit-cover w-100 rounded' alt="Guest House" />
                                    <span className='position-absolute bottom-0 start-0 p-3 text-white bg-dark opacity-75' style={{ width: '100%' ,zIndex:1}}>
                                        Drawing Room
                                    </span>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="position-relative">
                                    <img src='/baranti.webp' style={{height:'300px'}} className='img-fluid w-100  object-fit-cover rounded' alt="Guest House" />
                                    <span className='position-absolute bottom-0 start-0 p-3 text-white bg-dark opacity-75' style={{ width: '100%',zIndex:1 }}>
                                        Nice Outdoor
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
