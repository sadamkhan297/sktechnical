import React from 'react';
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

const Work = () => {
    const props = {
        percent: 90, 
        colorSlice: "rgb(250, 34, 90)",
        colorCircle: "hide",
        size: 250,
        borderRadius: "50%",
        fontColor: "#1d2020",
        stroke: 4,
        round: true,
        // speed: 60,
        // animationOff: true,
      };
    const props2 = {
        percent: 80, // is require
        colorSlice: "rgb(250, 34, 90)",
        colorCircle: "hide",
        stroke: 4,
        size: 250,
        fontColor: "#1d2020",
        // stroke: 4.5,
        round: true,
        // speed: 20,
      };
    const props3 = {
        percent: 95, // is require
        colorSlice: "rgb(250, 34, 90)",
        colorCircle: "hide",
        stroke: 4,
        size: 250,
        fontColor: "#1d2020",
        // stroke: 4.5,
        round: true,
        // speed: "800",
      };
    return (
        <>
            <section className="work">
                <div className="work_box">
                    <div className="work_heading">
                        <h1>Why to Work With ME</h1>
                        <h3>WEB . RESPONSIVE . UX/UI</h3>
                        <div className="borders"></div>
                    </div>
                    <p class="work_pera">Because I’m giving you the lowest price compared to the market and giving you the professional neet and clean work including deployment, And also giving you the free support for one month and unlimited revisions, I also have full refund policy... So are you still thinking? Come On..</p>
                  <div className="progress col-md-3 col-10">
                        <div className="progress_block_box">
                            <div className="progress_box">

                            <div className="prsntg">
                            <CircularProgressBar {...props} />
                            <div className="progress_icon">
                                <div className="icon1">
                                <i class="fab fa-gitlab" aria-hidden="true"></i>
                                </div>             
                            </div>
                            <div className="pgrs_pera">
                        <p>PERFORMANCE</p> 
                        </div>
                            </div>
                            <div className="prsntg">
                            <CircularProgressBar {...props2} />
                                                        <div className="progress_icon">       
                                <div className="icon1">
                                <i class="fas fa-shield-alt" aria-hidden="true"></i>
                                </div>                   
                            </div>
                            <div className="pgrs_pera">
                        <p>PERFORMANCE</p>  
                        </div>
                            </div>
                            <div className="prsntg">
                            <CircularProgressBar {...props3} />
                            <div className="progress_icon">
                                <div className="icon1">
                                <i class="far fa-gem" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="pgrs_pera">
                        <p>PERFORMANCE</p> 
                        </div>
                            </div>


                        </div>      
                </div> 
                </div> 
                
               </div>                                                   
                
            </section>
        </>
    )
}

export default Work
