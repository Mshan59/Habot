import { useTranslation } from "react-i18next";
import "./workBox.css";

const WorkBox = () => {
  const { t } = useTranslation();

  return (
    <div className="workbox container">
      <div className="d-flex justify-content-center align-item-center flex-column text-center">
      <h3>{t("howItWorks")}</h3>
     <center> <p className="col-md-8 my-4">
        {t("buyersPost")} {t("topSuppliers")}
      </p></center>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 d-flex flex-wrap justify-content-center ">
          <div className="box_">
            <img
              className="my-2"
              src="./1.png"
              height={60}
              width={60}
              alt=""
            />
            <p>{t("selectRole")}</p>
          </div>
          <div className="box_">
            <img
              className="my-2"
              src="./2.png"
              height={60}
              width={60}
              alt=""
            />
            <p>{t("buyersPostRequirements")}</p>
          </div>
          <div className="box_">
            <img
              className="my-2"
              src="./3.png"
              height={60}
              width={60}
              alt=""
            />
            <p>{t("reviewSelectContact")}</p>
          </div>
          <div className="w-100 d-lg-none"></div> {/* Clearfix for small screens */}
          <div className="box__">
            <img
              className="my-2"
              src="./4.png"
              height={60}
              width={60}
              alt=""
            />
            <p>{t("suppliersCompleteProfile")}</p>
          </div>
          <div className="box__">
            <img
              className="my-2"
              src="./5.png"
              height={60}
              width={60}
              alt=""
            />
            <p>{t("contactBuyers")}</p>
          </div>
          <div className="box__">
            <img
              className="my-2"
              src="./6.png"
              height={60}
              width={60}
              alt=""
            />
            <p>{t("connectMakeBusiness")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkBox;
