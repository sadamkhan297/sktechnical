import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Navmenu from "./Navmenu"
import NavSidebar from './NavSidebar'

const Navigation = () => {
    const [adScroll, setAdScroll] = useState(false);
    const [opnAbout, setOpnAbout] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const MyScroll = () => {
        if (window.pageYOffset > 0) {
            setAdScroll(true)
        } else {
            setAdScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", MyScroll);
        return () => {
            window.addEventListener("scroll", MyScroll);
        }
    }, [])

    const opnAboutEvent = () => {

        if (opnAbout === false) {
            setOpnAbout(true)
        } else {
            setOpnAbout(false)
        }

    }
    const CloseEvent = () => {
        setOpnAbout(false)
    }

    const openMenu=()=>{
        if (menuShow === false) {
            setMenuShow(true)
        }else{
            setMenuShow(false)
        }

    }
    return (
        <>
            <header>
                <div className={adScroll ? "main_menu scroll" : "main_menu"}
                >
                    <div className="center_menu">
                        <div className="logo">
                            <NavLink to="/">
                                <span className="brand">SK Technical</span>
                            </NavLink>
                        </div>
                        <span className="plus_menu" onClick={opnAboutEvent}>
                            {opnAbout ? " -" : " +"}
                        </span>
         {/* //////////// hamburger ////////// */}
                        <div className={menuShow ? "main_hmbrgr open" : "main_hmbrgr"}
                            onClick={openMenu}>
                            <div className="hamburger_menu"
                            >
                                <div className="line1"></div>
                                <div className="line2"></div>
                                <div className="line3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* ///////////Sidebar section ///////////// */}

            <NavSidebar opnAbout={opnAbout}
                CloseEvent={CloseEvent}
            />

          {/* ////////////// Menu /////////////////// */}
          
          <Navmenu menuShow={menuShow}/>
        </>
    )
}

export default Navigation
