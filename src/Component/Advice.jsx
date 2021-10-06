import React from 'react';
import { NavLink } from "react-router-dom";
import AdviceCard1 from "./AdviceCard1"
import AdviceCard2 from "./AdviceCard2"
const Advice = () => {
    return (
        <>  <div className="advice_container container-fluid">
            <div className="advice_box col-md-4 col-10">
                {AdviceCard1.map((crnVal) => {
                    return (
                        <><NavLink to={crnVal.id}>
                            <div className="img_data">
                                <div class="article-overlay">{crnVal.article}
                                </div>
                                <img src={crnVal.img} alt=""/>
                            </div></NavLink> </>
                    )
                })
                }
            </div>
        </div>
            <div className="advice_info">
                {AdviceCard2.map((crnVals) => {
                    return (
                        <>
                            <div className="main_info">
                                <div className="info_data">
                                    <NavLink to={crnVals.id}>
                                        <h2>{crnVals.h2}</h2>
                                        <p>{crnVals.p}</p> </NavLink>
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

export default Advice;
