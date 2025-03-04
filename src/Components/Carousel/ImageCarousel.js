import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ImageCarousel = (img, img2, img3) => {
 return (
    <div>
        <Carousel>
                <div>
                    <img src={img} alt='ig'/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt='img' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt='img' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}


export default ImageCarousel
