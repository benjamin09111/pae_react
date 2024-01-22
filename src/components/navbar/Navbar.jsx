import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import images from '../../constant/images';
import './navbar.css';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <nav className={`app__navbar ${visible ? '' : 'app__navbar--hidden'}`}>
            <div className='app__navbar-logo-container'>
                <img src={images.logo} alt='logo' />
            </div>
            <div className='app__navbar-link-container'>
                <Link className='app_navbar-link' to='/'>
                    Home
                </Link>
                <Link className='app_navbar-link' to='/begin'>
                    Consulta
                </Link>
                <a href='#whatispae'>¿Qué es PAE?</a>
                <a href='#pros'>Profesionales</a>
                <a href='#comments'>Comentarios</a>
            </div>
            <div className='footer__contact-container special'>
                <div className='footer__contact-c2'>
                    <a href="https://www.facebook.com/Mimanualdelbebeyembarazo" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={32} />
                    </a>
                    <a href="https://www.instagram.com/mimanualdelbebe/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={32} />
                    </a>
                    <a href="https://www.youtube.com/user/Mimanualdelbebe" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={32} />
                    </a>
                    <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fmimanualdelbebe" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={32} />
                    </a>
                </div>
            </div>
            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu
                    style={{ cursor: 'pointer' }}
                    color='#fff'
                    fontSize={27}
                    onClick={() => setToggleMenu(true)}
                />
                {toggleMenu && (
                    <div className='app__navbar-smallscreen_overlay slide-bottom'>
                        <div className='button-close-container'>
                            <button
                                className='app__navbar-button-exit'
                                style={{ border: 'none' }}
                                onClick={() => setToggleMenu(false)}
                            >
                                &times;
                            </button>
                        </div>
                        <ul className='app__navbar-smallscreen-links'>
                            <Link
                                onClick={() => setToggleMenu(false)}
                                className='app_navbar-link-responsive'
                                to='/'
                            >
                                Home
                            </Link>
                            <Link
                                onClick={() => setToggleMenu(false)}
                                className='app_navbar-link-responsive'
                                to='/begin'
                            >
                                Consulta
                            </Link>
                            <a onClick={() => setToggleMenu(false)} href='#whatispae'>
                                ¿Qué es PAE?
                            </a>
                            <a onClick={() => setToggleMenu(false)} href='#pros'>
                                Profesionales
                            </a>
                            <a onClick={() => setToggleMenu(false)} href='#comments'>
                                Comentarios
                            </a>
                            <a onClick={() => setToggleMenu(false)} href='#footer'>
                                Contacto
                            </a>
                        </ul>
                    </div>
                )}
            </div>

            <div className='app__navbar-buttons-container'>
                <a className='app__navbar-buttons-container-link' href='https://www.mimanualdelbebe.com'>
                    Mi Manual del Bebé
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
