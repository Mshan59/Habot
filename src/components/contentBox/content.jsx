// src/components/contentBox/content.js
import  { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./content.css"; // Assuming this imports necessary styles

const Content = () => {
  const [activeTab, setActiveTab] = useState("buyer");
  const { t, i18n } = useTranslation();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-fluid content" style={{ background: "#072F57" }} lang={i18n.language}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <iframe
              src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=hUgz79R3HiM_NnJD"
              width={500}
              height={300}
              className="responsive-iframe"
              title="YouTube Video"
            ></iframe>
          </div>
          <div className="col-md-6 ">
            <div className="buy-sup">
              <ul className="d-flex text-light">
                <li
                  className={`mx-4 ${activeTab === "buyer" ? "active-tab" : ""}`}
                  onClick={() => handleTabClick("buyer")}
                >
                  <h4 style={{ cursor: 'pointer' }}>{t('buyer')}</h4>
                </li>
                <li
                  className={`mx-4 ${activeTab === "supplier" ? "active-tab" : ""}`}
                  onClick={() => handleTabClick("supplier")}
                >
                  <h4 style={{ cursor: 'pointer' }}>{t('supplier')}</h4>
                </li>
              </ul>
            </div>
            <div className="content-buy text-light">
              {activeTab === "buyer" && (
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    {t('postRequirements')}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    {t('sitBackForSuppliers')}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    {t('chooseSuppliers')}
                  </li>
                </ul>
              )}
              {activeTab === "supplier" && (
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    {t('postRequirementsSupplier')}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    {t('sitBackForBuyers')}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    {t('chooseBuyers')}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
