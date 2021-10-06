// import ContactForm from './ContactForm';

import { NavLink } from "react-router-dom";

const PortfContact = () => {
    return (
        <>
                <div className="contact2">
                    <div className="contact_heading2">
                        <h1>Let’s Work Together</h1>
                        <h3>TELL ME ABOUT YOUR PROJECT</h3>
                        <div className="border"></div>
                    </div>
                    <div className="contact_contant2">
                        <p>Coding is really hard process, Please take a minute and contact me to discuss your project needs and requirements and also we can discuss about how can we proceed, So wanna talk? click on “Lets Talk” button by filling your contact info or see more contact options in contact page.</p>
                    </div>

                    <NavLink className="contact-btn-link" to="/contact">
                    <button className="contact-btn">LET'S TALK</button>
                    </NavLink>

                </div>
        </>
    )
}

export default PortfContact;
