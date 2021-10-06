import React from 'react'
import Navigation from "../Navigation"
import Slider from "../Slider"
import PortfContact from '../All_pages/PortfContact'
import Footer from "../Footer"
import SingleProDetail from "./SingleProDetail"
import img from "../pics/sk03.jpg"
const SinglePage4 = () => {
     return (
          <>
                  <Navigation />
               <section className="single_header_1" style={{border: "2px"}}>
              
                    <div className="img">
                         <img src={img} alt="" />
                         <SingleProDetail />
                    </div>
               </section>
               <Slider />
               <PortfContact />
               <Footer />
          </>
     )
}

export default SinglePage4
