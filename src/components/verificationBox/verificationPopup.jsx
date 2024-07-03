import './verificationPopup.css';
import  { useState } from 'react';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const VerificationPopup = ({ onClose }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const handleEmailVerification = () => {
    // Simulate sending OTP to the email
    setStep(2);
  };

  const handleEmailOtpVerification = () => {
    // Verify the email OTP
    setStep(3);
  };

  const handleMobileVerification = () => {
    // Simulate sending OTP to the mobile number
    setStep(4);
  };

  const handleMobileOtpVerification = () => {
    // Verify the mobile OTP
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>X</button>
        {step === 1 && (
          <div>
            <h3>{t('verifyEmail')}</h3>
            <input className='input'
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('enterEmail')} required
            />
            <button className='button' onClick={handleEmailVerification}>{t('sendOtp')}</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3>{t('enterEmailOtp')}</h3>
            <input className='input'
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={t('enterOtp')} required
            />
            <button className='button' onClick={handleEmailOtpVerification}>{t('verifyOtp')}</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3>{t('verifyMobile')}</h3>
            <input className='input'
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder={t('enterMobile')} required
            />
            <button className='button' onClick={handleMobileVerification}>{t('sendOtp')}</button>
          </div>
        )}
        {step === 4 && (
          <div>
            <h3>{t('enterMobileOtp')}</h3>
            <input className='input'
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder={t('enterOtp')} required
            />
            <button className='button' onClick={handleMobileOtpVerification}>{t('verifyOtp')}</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerificationPopup;
