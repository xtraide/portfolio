import React, { useEffect, useState } from 'react';
// import Projects from '../../services/Project';
import ModelProject from '../../models/ModelProject';

import '../../../assets/styles/Project.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
    // const [loading, setLoading] = useState<boolean>(false);
    // const [error, setError] = useState<string | null>(null);
    const [projects, setProjects] = useState<any[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    if (projects.length === 0) {


        setProjects([
            {
                "id": "1",
                "title": "JPO GUSTAVE EIFFEL",
                "link": "",
                "github": "",
                "description": "Site de la journée portes ouvertes de Universite Gustave Eiffel ",
                "fullDescription": "Description complète du projet 1",
                "image": "vite.svg",
                "frontimage": "vite.svg",
                "tech": [
                    "React",
                    "TypeScript",
                    "Vite.js",
                    "Spring Boot",
                    "h2"
                ],
                "bgcolor": "#ff333c",
                "date": "2023-01-01"
            },
            {
                "id": "2",
                "title": "Zushi",
                "link": "",
                "github": "https://github.com/GuedesAlexandre/Zushi",
                "description": "Site de reservation de sushi",
                "fullDescription": "Zushi est un projet d'application web de gestion des commandes pour un restaurant de sushi, l'objecitf est de créer un projet pluridisciplinaire mélangeant des compétence en développement front, développement back et UX/UI Design. Les missiosn étaient de réaliser une RESTAPI dans le langage de notre choix, nous avons choisi Symfony en mode API. Nous vons également réaliser une maquette et intégrer la partie front à l'aide d'Angular liant grâce à ses services le front et le back.",
                "image": "vite.svg",
                "frontimage": "vite.svg",
                "tech": [
                    "Angular",
                    "symfony",
                    "sql"
                ],
                "bgcolor": "#e333ff",
                "date": "2023-02-01"
            },
            {
                "id": "3",
                "title": "LIGM",
                "link": "",
                "github": "",
                "description": "Site de display des projets de recherche de LIGM",
                "fullDescription": "Le projet LIGM est un projet de site web de présentation des projets de recherche du laboratoire d'informatique Gaspard Monge. Le site permet de mettre en forme , presenter et alerter les visiteur sur la qualiter de l'aire au sein des universite colaboratrice. Le site est réalisé en Angular et Spring Boot.",
                "image": "vite.svg",
                "frontimage": "vite.svg",
                "tech": [
                    "Angular",
                    "symfony",
                    "sql"
                ],
                "bgcolor": "#e0e0e0",
                "date": "2023-03-01"
            },
            {
                "id": "4",
                "title": "Systeme solaire",
                "link": "",
                "github": "https://github.com/xtraide/solar-sys",
                "description": "Realisation d'un systeme solaire en 3D",
                "fullDescription": "Le projet systeme solaire est un projet de réalisation d'un systeme solaire en 3D, il est réalisé en React et Three.js. Cette creation est un projet de découverte de three.js",
                "image": "vite.svg",
                "frontimage": "UTJUIJUAAKSJJSBE6PVRMSUJFY-2262075248.jpg",
                "tech": [
                    "tree.js",
                    "React",
                    "TypeScript",
                    "Vite.js"
                ],
                "bgcolor": "#ff33c",
                "date": "2023-01-01"
            }
        ]);
    }
    useEffect(() => {
        // const fetchProjects = async () => {
        //     try {
        //         const response = await Projects.Read();
        //         setProjects(response);
        //     } catch (err) {
        //         setError("Erreur lors de la récupération des projets." + err);
        //     } finally {
        //         setLoading(false);
        //     }
        // };

        // fetchProjects();
    }, []);


    const handleMouseEnter = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>, project: ModelProject) => {
        gsap.to(e.currentTarget, {
            scale: 1.1,
            color: '#4ec0e9',
            duration: 0.3,
        });

        setCurrentImage(project.frontimage);
        gsap.to('#project-image', {
            opacity: 1,
            duration: 0.3,
        });
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            color: '#fff',
            backgroundColor: 'transparent',
            duration: 0.3,
        });
        gsap.to('#project-image', {
            opacity: 0,
            duration: 0.3,
        });
    };

    useEffect(() => {
        gsap.fromTo(
            '.project-translate-right',
            { opacity: 0, x: 500 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.project-translate-right',
                    start: 'top 100%',
                    end: 'bottom 90%',
                    scrub: true,
                }
            }
        );

        projects.forEach((_project, index) => {
            gsap.fromTo(
                `.project-container-${index}`,
                { opacity: 0, x: 500 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.project-container-${index}`,
                        start: 'top 100%',
                        end: 'bottom 90%',
                        scrub: true, // Synchronise l'animation avec le défilement

                    }
                }
            );
        });
    }, [projects]);



    return (
        <div className='project col-12'>
            <div className="row  ">
                <div className="col-6 card border-0 bg-transparent d-flex flex-column">
                    <h1 className="display-1 display-4-sm display-3-md display-2-lg display-1-xl title project-translate-right card-header font-color ">Projects</h1>
                    {projects.map((project, index) => (
                        <div className={`d-flex project-container project-container-${index}`} key={project.id}>
                            <div className="">
                                <div
                                    className="project-title title project-font-size card-body font-color"
                                    onMouseEnter={(e) => handleMouseEnter(e, project)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {project.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-6 d-flex flex-row justify-content-center position-relative ">
                    <img
                        id="project-image"
                        src={currentImage || ''}
                        alt="Project"
                        className="project-image img-fluid"
                        style={{ opacity: 0 }}
                    />
                </div>
            </div>
        </div >
    );
}