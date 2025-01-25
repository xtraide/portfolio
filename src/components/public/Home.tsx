import React, { useEffect } from 'react';
import About from './home/About';
import Project from './home/Project';
import Experience from './home/Experience';
import Education from './home/Education';
import Skills from './home/Skills';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';

export default function Home() {
    useEffect(() => {
        const fullpageInstance = new fullpage('#fullpage', {
            autoScrolling: true,
            navigation: true,
            anchors: ['home', 'skills', 'education', 'experience', 'projects'],
            navigationTooltips: ['Home', 'Skills', 'Education', 'Experience', 'Projects'],
            showActiveTooltip: true,
            scrollingSpeed: 900
        });

        return () => {
            fullpageInstance.destroy('all');
        };
    }, []);

    return (
        <div id="fullpage">
            <div className="section" >
                <About />
            </div>
            <div className="section" >
                <Skills />
            </div>
            <div className="section" >
                <Education />
            </div>
            <div className="section" >
                <Experience />
            </div>
            <div className="section" >
                <Project />
            </div>
        </div>
    );
}