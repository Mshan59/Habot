import { useTranslation } from 'react-i18next';
import './footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid footerr">
      <div className="container foo p-3">
        <div className="section-1 col-md-6 py-2">
          <div className="row">
            <div className="col-md-3">
              <img src="./logo_4.png" width={150} alt="" className='my-3' />
              <small className='mx-2 my-4' style={{color:'#fff'}}>© {t('companyName')}</small>
            </div>
            <div className="col-md-3 text-light">
              <ul>
                <b>{t('company')}</b>
                <li>{t('about')}</li>
                <li>{t('faq')}</li>
              </ul>
            </div>
            <div className="col-md-3 text-light">
              <ul>
                <b>{t('terms')}</b>
                <li>{t('dataPrivacy')}</li>
                <li>{t('terms')}</li>
                <li>{t('accessibility')}</li>
              </ul>
            </div>
            <div className="col-md-3 text-light">
              <ul>
                <b>{t('related')}</b>
                <li>{t('findBuyer')}</li>
                <li>{t('feedback')}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section-2 col-md-6 d-flex justify-content-end align-items-center ">
          <ul className='d-flex' style={{alignItems:'end'}}>
            <li className='mx-2'><img src="./link-1.png" alt="" /></li>
            <li className='mx-2'><img src="./link-2.png" alt="" /></li>
            <li className='mx-2'><img src="./link-3.png" alt="" /></li>
            <li className='mx-2'><img src="./link-4.png" alt="" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
