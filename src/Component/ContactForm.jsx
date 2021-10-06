import React, { useState } from 'react'

const ContactForm = () => {
    const [inputForm, setInputForm] = useState(false)
    const [inputData, setInputData] = useState({
        name: "",
        gmail: "",
        phone: ""
    })
    const inputEvent = (event) => {
        const { name, value } = event.target;
        setInputData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setInputForm(true)
        const { name, gmail, phone } = inputData;

        if (name && gmail && phone ) {
            const res = fetch (
                "https://reactwebsite-64737-default-rtdb.firebaseio.com/userDataManage.json",
                { 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name, 
                        gmail,
                         phone,
                    }),
                }
            );

            if (res) {
                setInputData({
                    name: "",
                    gmail: "",
                    phone: ""
                });
                // alert("Data Stored");
            } else {
                alert("plz fill the data");
            }
        } 
    };

return (
    <>
        <div className="contact_form">
            <form onSubmit={formSubmit}>
                <input type="text"
                    name="name"
                    placeholder="Name" required
                    value={inputData.name}
                    onChange={inputEvent}
                />
                <input type="gmail"
                    name="gmail"
                    placeholder="Gmail" required
                    value={inputData.gmail}
                    onChange={inputEvent}
                />
                <input type="numpber"
                    name="phone"
                    placeholder="Phone" required
                    value={inputData.phone}
                    onChange={inputEvent}
                />
                <button type="submit">
                    {/* &nbsp; */}
                    {
                        inputForm ? <p className="success"> Got it, I'll contact you shortly, Thanks </p> : "LET'S TALK"
                    }
                </button>
            </form>
        </div>
    </>
)
 }
export default ContactForm
