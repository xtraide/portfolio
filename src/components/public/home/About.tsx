import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import "../../../assets/styles/About.css";

const About = () => {
    useEffect(() => {
        // Vérification de l'enregistrement des plugins GSAP
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        // Vérification que les éléments existent
        const fadeInSection = document.querySelector(".fade-in-section");




        if (fadeInSection) {
            gsap.fromTo(
                fadeInSection,
                { opacity: 0, y: 50 }, // Initialisation
                {
                    opacity: 1, // Finalisation
                    y: 0,
                    duration: 2,
                    scrollTrigger: {
                        trigger: fadeInSection,
                        start: "top 80%", // Déclenchement de l'animation
                        end: "bottom 70%", // Fin de l'animation
                        scrub: true, // Effet de scroll fluide

                    },
                }
            );
        }

    }, []);

    return (
        <div className="col-12  d-flex justify-content-center align-items-center">

            <div className="fade-in-section">
                <div className="row">
                    <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
                        <img src="/IMG_20250207_151939_888.jpg" alt="Photo" className="img-fluid col-md-8" />
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="card border-0 bg-transparent text">
                            <div className="card-header ">
                                <h1 className="display-1 display-4-sm display-3-md display-2-lg display-1-xl title ">À propos</h1>
                            </div>
                            <div className="card-body">
                                <p className="card-text p-font-color text-justify basic-text">
                                    Étudiant passionné par l'informatique, je suis déterminé à
                                    devenir développeur full stack, avec une préférence marquée pour
                                    le backend. Mon parcours d'apprentissage m'a permis de développer
                                    une compréhension approfondie des rouages du développement
                                    informatique, en abordant à la fois les aspects front-end et
                                    back-end. Enthousiaste à l'idée de relever de nouveaux défis, je
                                    suis à la recherche d'opportunités stimulantes pour perfectionner
                                    mes compétences et évoluer en tant que professionnel polyvalent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
