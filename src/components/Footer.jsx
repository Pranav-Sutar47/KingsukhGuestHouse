import React from 'react'
import { Link } from 'react-scroll'


export default function Footer() {
  return (
    <div className='container-fluid background p-3'>
        <div className='row'>
            <div className='col-sm-12 col-md-4 text-center'>
                <h3 style={{color:'#ff9680'}} className='text'>Kingsukh Guest House</h3>
                <p>
                Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
                </p>
            </div>
            <div className='col-sm-12 col-md-4 text-center mt-2'>
                <h3 style={{color:'#ff9680'}}>Our Services</h3>
                <h5 className='textEffect'>Concierge Assistance</h5>
                <h5 className='textEffect'>Flexible Booking Options</h5>
                <h5 className='textEffect'>Airport Transfers</h5>
                <h5 className='textEffect'>Wellness & Recreation</h5>
            </div>
            <div className='col-sm-12 col-md-4 text-center mt-2'>
                <h3 style={{color:'#ff9680'}}>Contact Us</h3>
                <h5 className='textEffect'><a href='https://maps.app.goo.gl/8gqKDWpsVZDCgyr86' style={{textDecoration:'none',color:'white'}} target='blank'>Address:Beside Barshal Water Tank, Manpur, Barhanti, West Bengal
                723156</a></h5>
                <h5 className='textEffect'><a href='mailto:kkghosh0099@gmail.com' style={{textDecoration:'none',color:'white'}}>kkghosh0099@gmail.com</a></h5>
                <h5><a href='tel:+91 9007062180' style={{textDecoration:'none',color:'white'}}>+91 9007062180</a></h5>
            </div>
        </div>
    </div>
  )
}
