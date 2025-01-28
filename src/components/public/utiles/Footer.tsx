import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/Footer.css';

const Footer = () => {
    return (
        <div className="container-fluid col-md-10">
            <h1 className="text-center mb-4 title">Contactez-moi</h1>
            <div className="row">
                <div className="card col-md-6  m-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                            <a href={import.meta.env.VITE_Gihhub} className="ml-3">Github : {import.meta.env.VITE_Gihhub}</a>
                        </h5>
                    </div>
                </div>
                <div className="card col-md-6 m-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            <a href={import.meta.env.VITE_Linkedin} className="ml-3">Linkedin : {import.meta.env.VITE_Linkedin}</a>
                        </h5>
                    </div>
                </div>
                <div className="card col-md-6 m-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                            <a href={`mailto:${import.meta.env.VITE_Email}`} className="ml-3">Email : {import.meta.env.VITE_Email}</a>
                        </h5>
                    </div>
                </div>
                <div className="card col-md-6 m-3">
                    <div className="card-body">
                        <h5 className="card-title">
                            <FontAwesomeIcon icon={faPhone} size="2x" />
                            <span className="ml-3">Téléphone : 06 04 40 65 20</span>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;