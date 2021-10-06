import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <>
                <div className="contact">
                    <div className="contact_heading">
                        <h1>Let’s Work Together</h1>
                        <h3>TELL ME ABOUT YOUR PROJECT</h3>
                        <div className="border"></div>
                    </div>
                    <div className="contact_contant">
                        <p>Coding is really hard process, Please take a minute and contact me to discuss your project needs and requirements and also we can discuss about how can we proceed, So wanna talk? click on “Lets Talk” button by filling your contact info or see more contact options in contact page.</p>
                    </div>

                    <ContactForm />

                </div>
        </>
    )
}

export default Contact;
