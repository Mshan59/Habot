import './verification.css';
import  { useState } from 'react';
import { useTranslation } from 'react-i18next';
import VerificationPopup from './verificationPopup';

const Verification = () => {
  const { t, i18n } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="verified container-fluid" lang={i18n.language}>
      <h3>
        {t('letSuppliers')}{' '}
        <span style={{ color: '#000', borderBottom: '2px solid #EB7150' }}>
          {t('findYou')}
        </span>
      </h3>
      <button
        onClick={handleButtonClick}
        style={{
          background: '#EB7150',
          padding: '10px 20px',
          outline: 'none',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {t('getVerified')}
      </button>
      {showPopup && <VerificationPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Verification;
