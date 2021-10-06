import React from 'react';
import { NavLink } from "react-router-dom";
import Advice2Api from "../All_pages/Advice2Api"

const Advice2 = () => {
    return (
        <>
                    <div className="articles-container">
        { 
            Advice2Api.map((crnVal)=>{
                return(
                    <>
                <div className="single-article">
                    <NavLink to={crnVal.ids}>
                        <div className="single-article-img-container">
                            <div className="single-article-overlay">
                               {crnVal.title}
                            </div>
                            <img src={crnVal.img} alt="Top 4" />
                        </div>
                    </NavLink>
                    <div className="single-article-info">
                        <NavLink to={crnVal.ids}>
                            <h2>{crnVal.heading}</h2>
                        </NavLink>
                        <p>{crnVal.pera}</p>
                    </div>
                </div>
                    </>
                )
            })


        }
                </div>  
          
        </>
    )
}

export default Advice2;
