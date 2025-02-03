
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/styles/Footer.css';

export default function Footer() {
    return (
        <div className="container-fluid contact">
            <h1 className="text-center mb-4 title">Contactez-moi</h1>
            <div className="row mt-5">
                <div className="col-md-6 mb-3">
                    <div className="card m-3 card-bg border-white">
                        <a href={import.meta.env.VITE_Gihhub} className="ml-3 link-no-color">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                    <span className="ml-3">Github : xtraide</span>
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card m-3 card-bg">
                        <a href={import.meta.env.VITE_Linkedin} className="ml-3 link-no-color">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    <span className="ml-3">Linkedin : Nicolas Thieblemont</span>
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card m-3 card-bg">
                        <a href={`mailto:${import.meta.env.VITE_Email}`} className="ml-3 link-no-color">
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                    <span className="ml-3">Email : {import.meta.env.VITE_Email}</span>
                                </h5>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="card m-3 card-bg">
                        <div className="card-body d-flex flex-column align-items-center">
                            <h5 className="card-title">
                                <FontAwesomeIcon icon={faPhone} size="2x" />
                                <span className="ml-3">Téléphone : 06 04 40 65 20</span>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}