import About from "./home/About";
import Project from "./home/Project";
import Skills from "./home/Skills";
import Intro from "./home/Intro";
import Footer from "./utiles/Footer";

import "../../assets/styles/Home.css";

export default function Home() {
    return (
        <div id="fullpage">
            <div className="alert alert-warning alert-dismissible fade show z-3 fs-2" role="alert">
                <strong>Attention!</strong> Le site est en cours de développement. Certaines fonctionnalités peuvent ne pas être disponibles.

            </div>
            <div className="section" id="home">
                <Intro />
            </div>
            <div className="" id="about">
                <About />
            </div>
            <div className="" id="skills">
                <Skills />
            </div>
            {/* <div className="" id="projects">
                <Project />
            </div> */}
            <div className="" id="contact">
                <Footer />
            </div>
        </div>
    );
}