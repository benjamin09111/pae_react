import {React, useState} from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import images from "../../constant/images";
import "./navbar.css"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo-container'>
            <img src={images.logo} alt="logo" />
        </div>
        <div className='app__navbar-link-container'>
            <Link className='app_navbar-link' to="/">Home</Link>
            <Link className='app_navbar-link'  to="/begin">Consulta</Link>
            <a href="#whatispae">¿Qué es PAE?</a>
            <a href="#pros">Profesionales</a>
            <a href="#comments">Comentarios</a>
        </div>

        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu style={{cursor: "pointer"}} color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay'>
                <div className='button-close-container'>
                <button className='app__navbar-button-exit' style={{border: "none"}} onClick={() => setToggleMenu(false)}>&times;</button>
                </div>
                <ul className='app__navbar-smallscreen-links'>
                    <Link onClick={() => setToggleMenu(false)} className='app_navbar-link-responsive' to="/">Home</Link>
                    <Link onClick={() => setToggleMenu(false)} className='app_navbar-link-responsive' to="/begin">Pay</Link>
                    <a onClick={() => setToggleMenu(false)} href="#whatispae">¿Qué es PAE?</a>
                    <a onClick={() => setToggleMenu(false)} href="#pros">Profesionales</a>
                <a href="#comments">Comentarios</a>
                </ul>
            </div>)}
        </div>

        <div className='app__navbar-buttons-container'>
            <a className='app__navbar-buttons-container-link' href="https://www.mimanualdelbebe.com">Mi Manual del Bebé</a>
        </div>
    </nav>
    )
}

export default Navbar