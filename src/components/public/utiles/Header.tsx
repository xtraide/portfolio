
import Scrollspy from 'react-scrollspy';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/Header.css';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand text" href="#">Portfolio</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <Scrollspy items={['home', 'about', 'skills', 'projects', 'contact']} currentClassName="active" className="navbar-nav d-flex justify-content-around">
                        <li className="nav-item flex-fill text-center text">
                            <a className="nav-link " href="#home">Accueil</a>
                        </li>
                        <li className="nav-item flex-fill text-center text">
                            <a className="nav-link " href="#about">À propos</a>
                        </li>
                        <li className="nav-item flex-fill text-center text">
                            <a className="nav-link " href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item flex-fill text-center text">
                            <a className="nav-link " href="#projects">Projets</a>
                        </li>
                        <li className="nav-item flex-fill text-center text">
                            <a className="nav-link " href="#contact">Contact</a>
                        </li>
                    </Scrollspy>
                </div>
            </div>
        </nav>

    );
};

export default Header;