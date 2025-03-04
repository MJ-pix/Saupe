import React from 'react'
import {Parallax} from 'react-parallax'
import './ParallaxImage.css'
import PrevArtWork from '../../Assets/Images/DBN_Desktop_Images/DBN_PreviousArworkSeries_Kuva.jpg'

const ParallaxImage = () => {
    return (
        <div>
          <Parallax
            bgImage={PrevArtWork}
            strength={-500}
            bgImageStyle={{transition: "transform 1.5s ease-out", height:"auto", width: "100%"}}
          >
            <div className="parallax-content">
            </div>
          </Parallax>
        </div>
      );
    };

export default ParallaxImage
