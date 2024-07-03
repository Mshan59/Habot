// src/components/header/header.js
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { faBriefcase, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="header">
        <div className="headform">
          <div className="headd">
            <h1><strong>{t('areYouASupplier')}</strong></h1>
            <h1>{t('exploreMatchingOpportunities')}</h1>
          </div>
          <div className="formm d-flex flex-wrap">
            <form action="#" className='d-flex mnjh flex-wrap'>
              <div className="form-group">
                <FontAwesomeIcon icon={faBriefcase} style={{ color: '#E7770D' }} />
                <input type="text" placeholder={t('searchServicePlaceholder')} />
              </div>
              <div className="form-group">
                <FontAwesomeIcon icon={faLocationDot} style={{ color: '#E7770D' }} />
                <input type="text" placeholder={t('searchLocationPlaceholder')} />
              </div>
              <button className='px-4' style={{ background: '#00732F', outline: 'none', border: 'none', color: '#fff', borderRadius: '5px' }}>
                {t('searchButton')}
              </button>
            </form>
          </div>
          <p style={{ color: '#fff' }}>
            <b>{t('areYouABuyer')}</b> <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>{t('clickHereToPostRequirement')}</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
