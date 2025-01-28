
import Scrollspy from 'react-scrollspy'
import '../../../assets/Styles/Header.css'
export default function Header() {
    return (

        <div>

            <header>header</header>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
                <a className="navbar-brand text" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <Scrollspy items={['home', 'about', 'skills', /*'education', 'experience',*/'projects']} currentClassName="active" className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="#about">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text" href="#skills">Compétences</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#education">Etude</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Expérience</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link text" href="#projects">Projet</a>
                        </li>
                    </Scrollspy>
                </div>
            </nav>
        </div>
    )
}