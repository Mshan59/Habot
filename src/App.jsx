// src/App.js
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Divehabot from './components/divehabot/divehabot';
import Content from './components/contentBox/content';
import Verification from './components/verificationBox/verification';
import WorkBox from './components/workBox/workBox';
import Footer from './components/footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

function App() {
  const { i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(false); // Default to false (English)

  const changeLanguage = () => {
    const newLanguage = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLanguage);
    setIsArabic(!isArabic);
  };

  useEffect(() => {
    document.body.classList.toggle('rtl', isArabic);
  }, [isArabic]);

  return (
    <>
      <div className="language-switcher" onClick={changeLanguage}>
        <FontAwesomeIcon className='icon' icon={faLanguage} />
      </div>
      <Navbar />
      <Header />
      <Divehabot />
      <Content />
      <Verification />
      <WorkBox />
      <Footer />
    </>
  );
}

export default App;
