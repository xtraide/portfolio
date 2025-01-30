import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/About.css';
import { gsap } from "gsap";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            gsap.to(".star", {
                duration: 9,
                keyframes: [
                    { x: 70, y: 20, rotate: -50, scale: 1, duration: 2.25 },
                    { x: 0, y: 100, rotate: -65, duration: 2.25 },
                    { x: 0, y: 200, rotate: -85, duration: 1.35 },
                    { x: 150, y: 300, rotate: -130, duration: 2.25 },
                    { x: 200, y: 400, rotate: -130, duration: 1.35 },
                    { x: 350, y: 500, rotate: -130, duration: 0.9 },
                    { x: 500, y: 600, rotate: -130, duration: 1.35 }
                ],
                ease: "linear",
                repeat: -1
            });
        }
    }, [inView]);
    return (
        <div className="container-fluid about" >
            <div className='stars'>
                <div className='star'></div>
            </div>
            <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src="/vite.svg" alt="Vite Logo" className="img-fluid" />
                    </div>
                    <div className="col-md-7">
                        <div className="card bg-transparent text">
                            <div className="card-header">
                                <h1 className='title'>À propos</h1>
                            </div>
                            <div className="card-body">
                                <p className="card-text description">
                                    Étudiant passionné par l'informatique, je suis déterminé à devenir développeur full stack, avec une préférence marquée pour le backend.
                                    Mon parcours d'apprentissage m'a permis de développer une compréhension approfondie des rouages du développement informatique, en abordant à la fois les aspects front-end et back-end. Enthousiaste à l'idée de relever de nouveaux défis, je suis à la recherche d'opportunités stimulantes pour perfectionner mes compétences et évoluer en tant que professionnel polyvalent.
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

function useEffect(arg0: () => void, arg1: boolean[]) {
    throw new Error('Function not implemented.');
}
