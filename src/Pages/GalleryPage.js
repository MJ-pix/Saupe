import React from 'react'
import DBN_Desktop_Animation from '../Assets/Animations/DBN_ThumbnailAnimaatio_Desktop.mp4'
import ProjectInfoGrid from '../Components/ProjectInfoGrid/ProjectInfoGrid'
import ScrollTextContainer from '../Components/ScrollTextContainer/ScrollTextContainer'
import ParallaxImage from '../Components/ParallaxImage/ParallaxImage'
import DBN_Sketches from '../Assets/Images/DBN_Desktop_Images/DBN_SketchesKuva.png'
import Header from '../Components/Header/Header'
import DBN_Heroimage from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_Herokuva_1_5.png'
import ImageCarousel from '../Components/Carousel/ImageCarousel'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import DBN_CarouselImg1 from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_Karuselli_Kuva1.png'
import DBN_CarouselImg2 from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_Karuselli_Kuva2.png'
import DBN_CarouselImg3 from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_Karuselli_Kuva3.png'
import DBN_PostersLayoutImg from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_LayoutKuva_3_5.png'
import DBN_Posters_3_Poster from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_3PostersKuva_4_5.png'
import DBN_Poster_Bottom from '../Assets/Images/DBN_Desktop_Images/DBN_Posters_BottomKuva_5_5.png'
import DBN_ThumbnailAnimaatio_Mobile from '../Assets/Animations/DBN_ThumbnailAnimaatio_Mobile.mp4'
import InfoGrid from '../Components/InfoGrid/InfoGrid'
import DBN_PrevArtWork_Mobile_image from '../Assets/Images/DBN_Mobile_Images/DBN_PreviousArworkSeries_Kuva_Mobile.png'
import DBN_CarouselImg1_Mobile from '../Assets/Images/DBN_Mobile_Images/DBN_Posters_Karuselli_Kuva_Mobile1.png'
import DBN_CarouselImg2_Mobile from '../Assets/Images/DBN_Mobile_Images/DBN_Posters_Karuselli_Kuva_Mobile2.png'
import DBN_CarouselImg3_Mobile from '../Assets/Images/DBN_Mobile_Images/DBN_Posters_Karuselli_Kuva_Mobile3.png'
import DBN_Sketches_Mobile1 from '../Assets/Images/DBN_Mobile_Images/DBN_SketchesKuva_Mobile_1_3.png'
import DBN_Sketches_Mobile2 from '../Assets/Images/DBN_Mobile_Images/DBN_SketchesKuva_Mobile_2_3.png'
import DBN_Sketches_Mobile3 from '../Assets/Images/DBN_Mobile_Images/DBN_SketchesKuva_Mobile_3_3.png'
import DBN_Heroimage_Mobile from '../Assets/Images/DBN_Mobile_Images/DBN_Posters_Herokuva_Mobile_1_5.png'
import DBN_3Poster  from '../Assets/Images/DBN_Mobile_Images/DBN_Posters_3PostersKuva_Mobile_4_5.png'
import DBN_Bottom_Img from '../Assets/Images/DBN_Mobile_Images/DBN_Posters_BottomKuva_Mobile_5_5.png'
import { useEffect, useState } from 'react'
const GalleryPage = () => {

      const useMediaQuery = (query) =>  {
        const mediaMatch = window.matchMedia(query);
        const [matches, setMatches] = useState(mediaMatch.matches);
    
        useEffect(() => {
          const handler = e => setMatches(e.matches);
          mediaMatch.addEventListener("change",handler);
          return () => mediaMatch.addEventListener("change",handler);
        });
        return matches;
      }

  return (
    <div>
      {useMediaQuery('(max-width: 600px)')? (<div><Header/><video width="100%" height="fit-content" loop muted autoPlay src={DBN_ThumbnailAnimaatio_Mobile} className='video'/>
      <InfoGrid/>
      <ScrollTextContainer
        RighToLeft={"-"}
        scrollPos={0}
        scrollText={"BASED ON MY PREVIOUS ARTWORK SERIES"}
        justifyContentPos={"end"}/>
        <img src={DBN_PrevArtWork_Mobile_image} alt='prevArtwork_series' style={{width:"100%", marginBottom: "-4px"}}></img>
        <ScrollTextContainer
        RighToLeft={"-"}
        scrollPos={0}
        scrollText={"ILLUSTRATED WITH TRADITIONAL MEDIA"}
        justifyContentPos={"end"}/>
        <Carousel showThumbs={false} showStatus={false}  showArrows = {false}showIndicators={false} swipeable={true} emulateTouch={true} autoPlay={true} infiniteLoop={true} width={"100%"}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", left: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginLeft:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-left'></i>
              </div>
            )
          } 
          renderArrowNext={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", right: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginRight:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-right'></i>
              </div>
            )

          }
        >
          <div>
              <img src={DBN_Sketches_Mobile1} alt='ig'/>
          </div>
          <div>
              <img src={DBN_Sketches_Mobile2} alt='img' />
          </div>
          <div>
              <img src={DBN_Sketches_Mobile3} alt='img' />
          </div>
        </Carousel>
          <ScrollTextContainer
            RighToLeft={"-"}
            scrollPos={0}
            scrollText={"3 UNIQUE EVENT POSTERS"}
            justifyContentPos={"end"}/>   
        <img src={DBN_Heroimage_Mobile} alt='prevArtwork_series' style={{width:"100%", marginBottom: "-4px"}}></img>
        <Carousel showThumbs={false} showStatus={false}  showArrows = {false}showIndicators={false} swipeable={true} emulateTouch={true} autoPlay={true} infiniteLoop={true} width={"100%"}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", left: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginLeft:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-left'></i>
              </div>
            )
          } 
          renderArrowNext={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", right: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginRight:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-right'></i>
              </div>
            )

          }
        >
          <div>
              <img src={DBN_CarouselImg1_Mobile} alt='ig'/>
          </div>
          <div>
              <img src={DBN_CarouselImg2_Mobile} alt='img' />
          </div>
          <div>
              <img src={DBN_CarouselImg3_Mobile} alt='img' />
          </div>
        </Carousel>
        <img src={DBN_PostersLayoutImg} alt='DBN_Layout' style={{width:"100%", marginBottom: "-4px"}}></img>
        <img src={DBN_3Poster} alt='DBN_Layout' style={{width:"100%", marginBottom: "-4px"}}></img>
        <img src={DBN_Bottom_Img} alt='DBN_Layout' style={{width:"100%", marginBottom: "-4px"}}></img>
        </div>)
        :
        (<div><Header/><video width="100%" height="fit-content" loop muted autoPlay src={DBN_Desktop_Animation} className='video'/>
      <ProjectInfoGrid/>
      <ScrollTextContainer
        RighToLeft={"-"}
        scrollPos={-100}
        scrollText={"BASED ON MY PREVIOUS ARTWORK SERIES"}
        justifyContentPos={"end"}/>
      <ParallaxImage/>
      <ScrollTextContainer
        RighToLeft={""}
        scrollPos={-650}
        scrollText={"ILLUSTRATED WITH TRADITIONAL MEDIA"}
        justifyContentPos={"start"}/>
      <img src={DBN_Sketches} alt='DBN_SKETCHES' style={{maxWidth: "100%", marginBottom:"-4px"}}></img>
      <ScrollTextContainer
        RighToLeft={"-"}
        scrollPos={-1300}
        scrollText={"3 UNIQUE EVENT POSTERS"}
        justifyContentPos={"end"}/>
        <img src={DBN_Heroimage} style={{width: "100%", marginBottom:"-4px"}} alt='DBN-Hero'></img>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} width={"80%"}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", left: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginLeft:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-left'></i>
              </div>
            )
          } 
          renderArrowNext={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", right: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginRight:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-right'></i>
              </div>
            )

          }
        >
          <div>
              <img src={DBN_CarouselImg1} alt='ig'/>
          </div>
          <div>
              <img src={DBN_CarouselImg2} alt='img' />
          </div>
          <div>
              <img src={DBN_CarouselImg3} alt='img' />
          </div>
          </Carousel>        
          <img src={DBN_PostersLayoutImg} alt='DBN_SKETCHES' style={{maxWidth: "100%", marginBottom:"-4px"}}></img>
          <img src={DBN_Posters_3_Poster} alt='DBN_SKETCHES' style={{maxWidth: "100%", marginBottom:"-4px"}}></img>          
          <img src={DBN_Poster_Bottom} alt='DBN_SKETCHES' style={{width: "100%", marginBottom:"-4px"}}></img></div>)}
      
      {/* <video width="100%" height="fit-content" loop muted autoPlay src={DBN_Desktop_Animation} className='video'/>
      <ProjectInfoGrid/>
      <ScrollTextContainer
        RighToLeft={"-"}
        scrollPos={0}
        scrollText={"BASED ON MY PREVIOUS ARTWORK SERIES"}
        justifyContentPos={"end"}/>
      <ParallaxImage/>
      <ScrollTextContainer
        RighToLeft={""}
        scrollPos={100}
        scrollText={"ILLUSTRATED WITH TRADITIONAL MEDIA"}
        justifyContentPos={"start"}/>
      <img src={DBN_Sketches} alt='DBN_SKETCHES' style={{maxWidth: "100%", marginBottom:"-4px"}}></img>
      <ScrollTextContainer
        RighToLeft={"-"}
        scrollPos={-1300}
        scrollText={"3 UNIQUE EVENT POSTERS"}
        justifyContentPos={"end"}/>
        <img src={DBN_Heroimage} style={{width: "100%", marginBottom:"-4px"}} alt='DBN-Hero'></img>
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} width={"80%"}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", left: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginLeft:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-left'></i>
              </div>
            )
          } 
          renderArrowNext={(onClickHandler, hasPrev) =>
            hasPrev && (
              <div
                onClick={onClickHandler}
                style={{position: "absolute", top: "0", right: "0", bottom: "0", display: "flex", justifyContent:"center",alignItems:"center", fontSize:"xxx-large",zIndex:"2", marginRight:"10px"
              }}>
                <i className='far fa-arrow-alt-circle-right'></i>
              </div>
            )

          }
        >
          <div>
              <img src={DBN_CarouselImg1} alt='ig'/>
          </div>
          <div>
              <img src={DBN_CarouselImg2} alt='img' />
          </div>
          <div>
              <img src={DBN_CarouselImg3} alt='img' />
          </div>
          </Carousel>        
          <img src={DBN_PostersLayoutImg} alt='DBN_SKETCHES' style={{maxWidth: "100%", marginBottom:"-4px"}}></img>
          <img src={DBN_Posters_3_Poster} alt='DBN_SKETCHES' style={{maxWidth: "100%", marginBottom:"-4px"}}></img>          
          <img src={DBN_Poster_Bottom} alt='DBN_SKETCHES' style={{width: "100%", marginBottom:"-4px"}}></img> */}
    </div>
  )
}

export default GalleryPage
