import React from 'react'
import ContactForm from '../ContactForm';

const Contact_Me = () => {
     return (
          <>
              <section className="contact-me">
              <div className="contact-me-container">
              <div className="contact-info">
              <span>Give your online presence it deserves.</span>
              <div>I have more than 5 years of experience in web development, I'm ready to start work right now and can assure the best services from my end. Please take a minute and contact me to discuss your project needs and requirements and also we can discuss about how can we proceed, So wanna talk? click on “Lets Talk” button by filling your contact info or see more contact options below.</div>
              </div>

              <div className="contact-me-form">
              <div className="contact-form">
              <ContactForm />    
              </div>
              </div>


              </div>
              </section>
          </>
     )
}

export default Contact_Me
