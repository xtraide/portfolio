import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../assets/styles/About.css";

const About = () => {
    useEffect(() => {
        // Vérification de l'enregistrement des plugins GSAP
        gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

        // Vérification que les éléments existent
        const fadeInSection = document.querySelector(".fade-in-section");
        const aboutStar = document.querySelector("#about-star");



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
                        markers: true, // Marqueurs pour déboguer
                    },
                }
            );
        }

        // Animation de la trajectoire 
        if (aboutStar) {
            gsap.set(aboutStar, { scale: 1, autoAlpha: 1 });

            gsap.to(aboutStar, {
                duration: 5,
                ease: "linear",
                immediateRender: true,
                motionPath: {
                    path:
                        "M30.601,-30.401 C33.58,-29.653 1.22,-20.131 -3.299,9.331 -8.488,43.202 16.888,100.325 41.532,139.012 67.336,179.531 171.11,237.14 185.276,243.074 ",
                    alignOrigin: [0.5, 0.5],
                    autoRotate: 90,
                },
            });
        }
    }, []);

    return (
        <div className="container-fluid col-md-12 about stars">
            <div className="star" id="about-star"></div>
            <div className="fade-in-section">
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center align-items-center">
                        <img src="/vite.svg" alt="Vite Logo" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <div className="card bg-transparent text">
                            <div className="card-header">
                                <h1 className="title">À propos</h1>
                            </div>
                            <div className="card-body">
                                <p className="card-text text col-md-8">
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
