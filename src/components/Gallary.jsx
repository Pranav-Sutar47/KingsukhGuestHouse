import React, { useEffect } from 'react'
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";


const photos = [
  {
    src: "/guesthouse.jpg",
    width: 800,
    height: 600
  },
  {
    src: "/large.jpg",
    width: 1600,
    height: 900
  },
  {
    src: "/small.jpg",
    width: 1600,
    height: 900
  },
  {
    src: "/hall.jpg",
    width: 800,
    height: 600
  },
  {
    src: "/flower.jpg",
    width: 300,
    height: 500
  },
  {
    src: "/mithonDam.webp",
    width: 900,
    height: 600
  },
  {
    src: "/baranti.webp",
    width: 1200,
    height: 900
  },
  {
    src: "/palash.webp",
    width: 600,
    height: 300
  }
  ,
  {
    src: "/ayodhya.webp",
    width: 1200,
    height: 900
  }
];

export default function Gallary() {
  return (
    <div className='container-fluid' id='gallary'>
        <h3 style={{color:'rgb(237, 84, 52)'}} className='customText mt-3'>GALLARY</h3>
        <RowsPhotoAlbum
      photos={photos}
      sizes={{
        size: "1168px",
        sizes: [
          {
            viewport: "(max-width: 1200px)",
            size: "calc(100vw - 32px)",
          },
        ],
      }}
    />
    </div>
  )
}
