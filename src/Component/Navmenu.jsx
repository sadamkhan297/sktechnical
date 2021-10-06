import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlink = (props, ) => {
  
    return (
        <>
              {/* //////////Menu//////////// */}
              <div className={props.menuShow ? "menu  showMenu" : "menu"}>
                <div className="menues">
                    <div className="menu_link">
                        <NavLink exact activeClassName="active_class" to="/" >Home</NavLink>
                        <NavLink exact activeClassName="active_class" to="/portfolio">Portfolio</NavLink>
                        <NavLink exact activeClassName="active_class" to="/articles">Articles</NavLink>
                        <NavLink exact activeClassName="active_class" to="/contact">Let's Talk</NavLink>
                    </div>
                </div>
                </div>
           
        </>
    )
}

export default Navlink
