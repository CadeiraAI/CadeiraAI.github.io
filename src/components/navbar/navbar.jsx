import './navbar.css'
import { NavLink } from 'react-router-dom';
import LogoImg from '../../assets/img/Logo.png'

function Navbar () {
    return (
    <nav>
        <NavLink to="/home"><img src={LogoImg} alt="" /></NavLink>
        <div>
            <NavLink to="/home">HOME</NavLink>  
            <NavLink to="/demo"><span>DEMO</span></NavLink>  
            <NavLink to="/product">PRODUCT</NavLink>  
            <NavLink to="/about">ABOUT US</NavLink>  
            <NavLink to="/contact">CONTACT</NavLink>
        </div>
    </nav>
    )
}

export default Navbar