// import { NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import PordfCard from './PordfCard'
// import href from "./Img-Single-Page/SinglePage1"

const Portf = () => {
    return (
        <>
        <div className="portf">
    {
        PordfCard.map((crnVal)=>{
            return(
                <>
                <NavLink to={crnVal.id}>
                    <div className="port_item">
                        <div className="port_heading">{crnVal.hading}</div>
                        <img src={crnVal.img} alt="" />
                    </div>
                </NavLink>
                </>
            )
        })
    }
            </div>
            <div className="view_container">

    <NavLink className="view_link" to="/portfolio" >
    <p>VIEW ALL WORK</p>
    </NavLink>           
            </div>
        </>
    )
}
export default Portf

