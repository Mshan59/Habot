import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./content.css"; // Assuming this imports necessary styles

const Content = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container-fluid content" style={{ background: "#072F57" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <iframe
              src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=hUgz79R3HiM_NnJD"
              className="responsive-iframe"
              title="YouTube Video"
            ></iframe>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="buy-sup">
              <ul className="d-flex text-light justify-content-center justify-content-md-start">
                <li
                  className={`mx-2 mx-md-4 ${activeTab === "buyer" ? "active-tab" : ""}`}
                  onClick={() => handleTabClick("buyer")}
                >
                  <h4 style={{cursor:'pointer'}}>Buyer</h4>
                </li>
                <li
                  className={`mx-2 mx-md-4 ${activeTab === "supplier" ? "active-tab" : ""}`}
                  onClick={() => handleTabClick("supplier")}
                >
                  <h4 style={{cursor:'pointer'}}>Supplier</h4>
                </li>
              </ul>
            </div>
            <div className="content-buy text-light">
              {activeTab === "buyer" && (
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    Post your Requirements
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    Sit back for multiple suppliers to contact you.
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    Choose among the suppliers based on the ratings and reviews.
                  </li>
                </ul>
              )}
              {activeTab === "supplier" && (
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                   Complete Your Profile and get Verified
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    Select Service tags for Relevant opportunities
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className="mx-2 text-success" />
                    Reach out to buyer and Expand your Business
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
