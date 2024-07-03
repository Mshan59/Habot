import  { useState } from 'react';
import PropTypes from 'prop-types';
import './loginSignupPopup.css';
import { useTranslation } from 'react-i18next';

const LoginSignupPopup = ({ onClose }) => {
    const { t } = useTranslation();
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onClose}>X</button>
                {isSignUp ? (
                    <div>
                        <h3>{t('signUp')}</h3>
                        <div className="form-grid">
                            <input className="input" type="text" placeholder={t('firstName')} />
                            <input className="input" type="text" placeholder={t('lastName')} />
                            <input className="input" type="email" placeholder={t('email')} />
                            <input className="input" type="text" placeholder={t('mobile')} />
                            <input className="input" type="text" placeholder={t('address')} />
                            <input className="input" type="text" placeholder={t('state')} />
                            <input className="input" type="text" placeholder={t('district')} />
                            <input className="input" type="text" placeholder={t('pincode')} />
                            <input className="input" type="text" placeholder={t('country')} />
                        </div>
                        <button className='button'>{t('signUp')}</button>
                        <p>{t('alreadyHaveAccount')} <span onClick={toggleForm} className="toggle-link">{t('Login')}</span></p>
                    </div>
                ) : (
                    <div>
                        <h3>{t('Login')}</h3>
                        <input className="input" type="email" placeholder={t('email')} />
                        <input className="input" type="password" placeholder={t('password')} />
                        <button className='button'>{t('Login')}</button>
                        <p>{t('dontHaveAccount')} <span onClick={toggleForm} className="toggle-link">{t('signUp')}</span></p>
                    </div>
                )}
            </div>
        </div>
    );
};

LoginSignupPopup.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default LoginSignupPopup;
