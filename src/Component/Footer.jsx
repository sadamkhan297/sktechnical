import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-bootstrap'
import Tooltip from "react-simple-tooltip"

const Footer = () => {
    let [index, setIndex] = useState('-3');

    const MyScroll = () => {
        if (window.pageYOffset > 8000) {
            setIndex('-1')
        } else {
            setIndex('-3')
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", MyScroll);
        return () => {
            window.addEventListener("scroll", MyScroll);
        }
    }, [])

    return (
        <>
            <footer style={{ zIndex: index }}>
                <div classNameName="footer_container" >
                    <p>
                        © Copyright 2014 - 2021 &nbsp; | &nbsp; All Rights Reserved &nbsp; | &nbsp; Developed by&nbsp;&nbsp;
                        <span className="footer_name">

                            <NavLink to="/">
                                SK Technical
                            </NavLink>
                        </span>
                    </p>
                    <div className="social-links">
                        <Tooltip content="linkedIn" padding="5" >
                            <NavLink to="/" target="_blank" rel="noreferrer" >
                                <span className="tooltip">
                                </span>
                                <i className="fab fa-linkedin-in" aria-hidden="true" content="linkedIn" ></i>
                            </NavLink>
                        </Tooltip>
                        <Tooltip content="facebook" padding="5" >
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <span className="tooltip"> </span>
                                <i className="fab fa-facebook-f" aria-hidden="true"></i></NavLink>
                        </Tooltip>
                        <Tooltip content="twitter" padding="5" >
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <span className="tooltip"></span>
                                <i className="fab fa-twitter" aria-hidden="true"></i></NavLink>
                        </Tooltip>
                        <Tooltip content="instagram" padding="5" >
                            <NavLink to="/" target="_blank" rel="noreferrer">
                                <span className="tooltip"></span>
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </NavLink>
                        </Tooltip>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
