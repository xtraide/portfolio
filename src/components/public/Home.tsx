import { useEffect } from 'react';
import About from './home/About';
import Project from './home/Project';
import Experience from './home/Experience';
import Education from './home/Education';
import Intro from './home/Intro';
import Skills from './home/Skills';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Footer from './utiles/Footer';

export default function Home() {
    useEffect(() => {
        const fullpageInstance = new fullpage('#fullpage', {
            autoScrolling: true,
            navigation: true,
            anchors: ['home', 'about', 'skills', /*'education', 'experience',*/ 'projects', 'contact'],
            navigationTooltips: ['Home', 'About', 'Skills', /*'Education', 'Experience',*/ 'Projects', 'Contact'],
            showActiveTooltip: true,
            scrollingSpeed: 900
        });

        return () => {
            fullpageInstance.destroy('all');
        };
    }, []);

    return (
        <div id="fullpage">
            <div className="section">
                <Intro />
            </div>
            <div className="section" >
                <About />
            </div>
            <div className="section" >
                <Skills />
            </div>
            {/* <div className="section" >
                <Education />
            </div>
            <div className="section" >
                <Experience />
            </div> */}
            <div className="section" >
                <Project />
            </div>
            <div className="section" >
                <Footer />
            </div>
        </div>
    );
}