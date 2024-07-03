import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import "./divehabot.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Divehabot = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container dive" lang={i18n.language}>
      <div className="row mdkl">
        <div className="col-md-6">
          <h2>{t('diveTitle')}</h2>
          <p>{t('diveDescription')}</p>
          <button className="btn btn-success px-4">
            {t('signUpToday')} <FontAwesomeIcon className="mx-4" icon={faArrowRight} />
          </button>
        </div>
        <div className="col-md-6">
          <div className="row d-flex list my-3">
            <div className="col-md-5">Abu Dhabi <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
            <div className="col-md-5">Dubai <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
          </div>
          <div className="row d-flex list my-3">
            <div className="col-md-5">Sharjah & Ajman <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
            <div className="col-md-5">Fujairah <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
          </div>
          <div className="row d-flex list my-3">
            <div className="col-md-5">Ras al Khaimah <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
            <div className="col-md-5">Umm Al Quwain <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divehabot;
