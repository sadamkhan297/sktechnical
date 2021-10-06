import React from 'react'
import { NavLink } from "react-router-dom";
import img from "../pics/sk7.jpg"
import SingleSidbar from "./SingleSidbar"


const SinglePage7Data = () => {
     return (
          <>
               <div className="single-article-page">
                    <div className="single-article-page-image">
                         <h1>Top 4 Web Design Strategies To Grow Your Business</h1>
                         <img src={img} alt="mobile" />
                    </div>
                    <div className="article-content">
                         <div className="single-article-page-container">
                              <h3>Do you want to take your business to the next level?</h3>
                              <p>Craft an effective digital presence for your business by getting an appealing website designed!</p>
                              <p>There are some of the Top web strategies and new trends that you can employ in your website to expand your SMEs and business.</p>
                              <p>&nbsp;</p>
                              <h3>1. Utilise full page headers.</h3>
                              <p>Images grab the attention of users better than text. Using hero size images for the header with some text or Call to Action buttons on it is a trending design that audience dig. You can also make use of videos in the header to attract audience attention.</p>
                              <p>&nbsp;</p>
                              <h3>2. Inclusion of white space in web design.</h3>
                              <p>People are taking the minimalistic approach with the essentials incorporated and highlighted and every unnecessary element done away with. This offers better user interface to visitors and renders a clean look to the overall website.</p>
                              <p>&nbsp;</p>
                              <h3>3. Stories create impact.</h3>
                              <p>With your business website, you get the power to control the narrative of your story. Articulate the tale of your brand, your purpose, values and even struggles along the way to develop a greater connection with your audience. Your products and services increase in value when there is a story attached forming an emotional connect to the audience.</p>
                              <p>&nbsp;</p>
                              <h3>4. Make your web design responsive.</h3>
                              <p>Your website must look great on mobile devices since they are increasingly used to browse the internet in present times. A website with responsive design is the one which adapts its elements according to the device screen size it is viewed on. Thus, it makes the web pages look amazing on devices your customers are using enhancing the user experience massively.</p>
                              <p>&nbsp;</p>
                              <p>Getting your website designed from the top Responsive Website Designing Company in Delhi that incorporates ongoing design trends employing the best design &amp; development practices is what you should be going for.</p>
                              <p>&nbsp;</p>
                              <p>For an innovative web design and excellent web development of your site, collaborate with
                                   <NavLink to="/"><strong> Sadam</strong>&nbsp;<strong> Khan</strong></NavLink>
                                   <strong> </strong>and scale up your revenue.</p>
                              <i>Published: 22:32:27 - 21/12/2020</i>
                         </div>
                        
<SingleSidbar/>

                    </div>
               </div>
          </>
     )
}

export default SinglePage7Data
