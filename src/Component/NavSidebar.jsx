import React from 'react'
import { NavLink } from 'react-router-dom'
import PordfCard from './PordfCard'

const NavSidebar = ({opnAboutEvent, opnAbout, CloseEvent}) => {  

    return (
        <>
          <div className= {opnAbout ? "slibar active" : "slibar"}> 
              <div className="slides">
              <span
               className= "close_btn " onClick={CloseEvent}>
              <i class="fas fa-times" aria-hidden="true"></i>
              </span>
                  <div className="plus_about">
                  <h3 className="plus_heading">
                  ABOUT MY WORK
                  </h3>
                 <p>I'm full-stack developer having expertise in React Js/Redux + Node Js, Express Js, MongoDB and Firestore. Strong team builder, having NavLink high level of personal morals, My skills also include AWS, Google Cloud, Firebase, Digital Ocean, WordPress, Woo-commerce, etc.</p>
                  </div>
                           <div className="plus_recent">
                  <h3 className="plus_heading2">
                  RECENT WORKS
                  </h3>
                  {
                    PordfCard.map((crnVal)=>{
                        return(
                           <>
                  <NavLink to={crnVal.id}>
                  <img src={crnVal.img} alt=""/>
                  </NavLink>
                  
                           </>
                        )
                    })
                  }
                  </div>
                  </div>
          </div>
        </>
    )
}

export default NavSidebar
