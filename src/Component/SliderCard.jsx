import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img from "./pics/slide2.png"

const SliderCard = () => {
   const slideImages = [
      {
        url: { img },
        caption: 'Slide 1'
      },
      {
        url: { img },
        caption: 'Slide 2'
      },
    ];
    const zoomOutProperties = {
      indicators: true,
      scale: 0.4,
      indicatorsColor: "white",
      arrows: false,
    }
   return (
      <>
         <div id="slider">
         <div className="slide-container">
        <Slide {...zoomOutProperties}>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <div className="slide-img">
                <img src={img} alt="" /></div>
              <p class="single-quote">“That’s been one of my mantras — focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple.”</p>
              <p class="author">STEVE JOBS - APPLE</p>
            </div>
          ))}
        </Slide>
      </div>
            {/* <input type="radio" name="slider" id="slide1" checked />
            <input type="radio" name="slider" id="slide2" />
            <div id="slides">
               <div id="overflow">
                  <div class="inner">
                     <div class="slide slide_1">
                        <div class="slide-content">
                           <img src={img} alt="" />
                           <p class="single-quote">“That’s been one of my mantras — focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple.”</p>
                           <p class="author">STEVE JOBS - APPLE</p>
                        </div>
                     </div>
                     <div class="slide slide_1">
                        <div class="slide-content">
                           <img src={img} alt="" />
                           <p class="single-quote">“That’s been one of my mantras — focus and simplicity. Simple can be harder than complex; you have to work hard to get your thinking clean to make it simple.”</p>
                           <p class="author">STEVE JOBS - APPLE</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="bullets">
               <label for="slide1"></label>
               <label for="slide2"></label>

            </div> */}
         </div>
      </>
   )
}

export default SliderCard
