import React from 'react';
import Scrollspy from 'react-scrollspy';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <a className="navbar-brand text" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Scrollspy items={['home', 'about', 'skills', 'projects']} currentClassName="active" className="navbar-nav w-100 d-flex justify-content-around">
                        <li className="nav-item flex-fill text-center">
                            <a className="nav-link text" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item flex-fill text-center">
                            <a className="nav-link text" href="#about">À propos</a>
                        </li>
                        <li className="nav-item flex-fill text-center">
                            <a className="nav-link text" href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item flex-fill text-center">
                            <a className="nav-link text" href="#projects">Projets</a>
                        </li>
                    </Scrollspy>
                </div>
            </nav>
        </div>
    );
};

export default Header;