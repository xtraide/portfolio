import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../assets/styles/About.css';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="container mt-5">
            <div ref={ref} className={`fade-in-section ${inView ? 'is-visible' : ''}`}>
                <div className="row">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src="/vite.svg" alt="Vite Logo" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
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