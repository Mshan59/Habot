import  { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import LoginSignupPopup from './loginSignupPopup';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const { t } = useTranslation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand logo mx-4" href="#">
                        <img src="./logo_1.png" alt="Habot_Logo" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">{t('findSuppliers')}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link" onClick={toggleMenu}>
                                    {t('findServiceTags')} <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <ul className={`dropdown-menu ${menuOpen ? 'show' : ''}`}>
                                    <li><a className="dropdown-item" href="#">{t('serviceOne')}</a></li>
                                    <li><a className="dropdown-item" href="#">{t('serviceTwo')}</a></li>
                                    <li><a className="dropdown-item" href="#">{t('serviceThree')}</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-success" onClick={togglePopup}><b>{t('loginSignup')}</b></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {showPopup && <LoginSignupPopup onClose={togglePopup} />}
        </>
    );
};

export default Navbar;
