import React from 'react'
import { NavLink } from "react-router-dom";
import PordfCard from '../PordfCard'
const SingleSidbar = () => {
     return (
          <>
                <aside>
                              <div className="sidebar">
                                   <h3>About Me</h3>
                                   <div className="aside-border"></div>
                                   <p>Hello, I'm sadam. A full-stack web developer having expertise in React Js/Redux + Node Js, Express Js, MongoDB and Firestore. Strong team builder, having NavLink high level of personal morals, result-oriented and committed to the successful outcome of the project. My skills also include AWS, Google Cloud, Firebase, Digital Ocean, WordPress, Woo-commerce, etc.<br /><br />I have over 5 years of experience in Web Development, I specialized in all kind of Websites, My goal is to provide fast &amp; friendly communication, lowest prices and to build long term relationships</p>
                                   <div className="plus-recent">
                                        {
                                             PordfCard.map((crnVal)=>{
                                                  return(
                                                       <>
                                                       <NavLink to="/"><img src={crnVal.img} alt="" /></NavLink>
                                                       </>
                                                  )
                                             })    
                                        }                                                                      
                                   </div>
                                   <h3>Contact Details</h3>
                                   <div className="aside-border"></div>
                                   <div className="contact-credentials">
                                        <p>Phone: <NavLink to="tel:+92 334 7070725">+92 0300 8364609</NavLink></p>
                                        <p>Email: <NavLink to="mailto:sadamkhan297@gmail..com">Sadamkhan297@gmail..co</NavLink></p>
                                        <p>Web: <NavLink to="/">SkTech.pk</NavLink></p>
                                   </div>
                                   <span>Kalim Web Solutions Near Railway Station, Raiwind Kalaan, District Lahore</span>
                                   <div className="social-links">
                                        <NavLink to="/" target="_blank" rel="noreferrer">
                                             <span className="tooltip">linkedIn</span>
                                             <i className="fab fa-linkedin-in" aria-hidden="true"></i></NavLink>
                                        <NavLink to="https://facebook.com/sadamkhan297" target="_blank" rel="noreferrer">
                                             <span className="tooltip">facebook</span>
                                             <i className="fab fa-facebook-f" aria-hidden="true"></i></NavLink>
                                        <NavLink to="https://twitter.com/sadamkhan297" target="_blank" rel="noreferrer">
                                             <span className="tooltip">twitter</span>
                                             <i className="fab fa-twitter" aria-hidden="true"></i></NavLink>
                                        <NavLink to="https://www.instagram.com/sadamkhan297/" target="_blank" rel="noreferrer">
                                             <span className="tooltip">instagram</span>
                                             <i className="fab fa-instagram" aria-hidden="true"></i></NavLink>
                                   </div>
                                   <h3>Lets Talk</h3>
                                   <div className="aside-border"></div>
                                   <NavLink to="/contact"><button>CONTACT ME</button></NavLink>
                              </div>
                         </aside>
          </>
     )
}

export default SingleSidbar

