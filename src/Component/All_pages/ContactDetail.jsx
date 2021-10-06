import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact_Detail = () => {
     return (
          <>
               <section className="contact-details">
                    <div className="contact-details-container">
                         <div className="contact-details-card">
                              <h2>Let's Talk.</h2>
                              <div className="contact-border"></div>
                              <h6>CONTACT DETAILS</h6>
                              <div className="contact-credentials">
                                   <p>Phone: <NavLink to="/">+92 300 8364609</NavLink></p>
                                   <p>Email: <NavLink to="/">sadamkhan297@gamil.com</NavLink></p>
                                   <p>Web: <NavLink to="/">Sk Technical</NavLink></p>
                              </div>
                         </div>
                         <div className="contact-details-card">
                              <h2>Connect.</h2>
                              <div className="contact-border"></div>
                              <h6>SOCIAL PRESENCE</h6>
                              <div className="social-credentials">
                                   <div className="social-links">
                                        <NavLink to="/" target="_blank" rel="noreferrer">
                                             <span className="tooltip">linkedIn</span>
                                             <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                        </NavLink>
                                        <NavLink to="/" target="_blank" rel="noreferrer">
                                             <span className="tooltip">facebook</span>
                                             <i className="fab fa-facebook-f" aria-hidden="true"></i></NavLink>
                                        <NavLink to="/" target="_blank" rel="noreferrer"><span className="tooltip">twitter
                                        </span><i className="fab fa-twitter" aria-hidden="true"></i>
                                        </NavLink>
                                        <NavLink to="/" target="_blank" rel="noreferrer">
                                             <span className="tooltip">instagram</span>
                                             <i className="fab fa-instagram" aria-hidden="true"></i>
                                        </NavLink>
                                   </div>
                              </div>
                         </div>
                         <div className="contact-details-card">
                              <h2>Find Me.</h2>
                              <div className="contact-border"></div>
                              <h6>ADDRESS</h6>
                              <p className="contact-address">Sadam Web Solutions Near Railway Station, Raiwind Kalaan, District Lahore</p>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default Contact_Detail
