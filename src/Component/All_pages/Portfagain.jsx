import { NavLink } from 'react-bootstrap'
import PordfCard from '../PordfCard'

const Portfagain = () => {
    return (
        <>
        <div className="portf2">
    {
        PordfCard.map((crnVal)=>{
            return(
                <>
                <NavLink to="/">
                    <div className="port_item2">
                        <div className="port_heading2">{crnVal.hading}</div>
                        <img src={crnVal.img} alt="doit"/>
                    </div>
                </NavLink>
                </>
            )
        })
    }
            </div>

        </>
    )
}
export default Portfagain;

