import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./divehabot.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const divehabot = () => {
  return (
    <div className="container dive">
      <div className="row mdkl">
        <div className="col-md-6">
          <h2>Ready to dive into HABOT</h2>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="btn btn-success px-4">Sign up Today! <FontAwesomeIcon className="mx-4" icon={faArrowRight} /></button>
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
            <div className="col-md-5">Ras al khamah <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
            <div className="col-md-5">Umm Al Quwain <FontAwesomeIcon className="mx-4 text-light" icon={faArrowRight} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default divehabot;
