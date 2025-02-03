import React, { useEffect, useState } from 'react';
import Projects from '../../services/Project';
import ModelProject from '../../models/ModelProject';

import '../../../assets/styles/Project.css';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [projects, setProjects] = useState<ModelProject[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await Projects.Read();
                setProjects(response);
            } catch (err) {
                setError("Erreur lors de la récupération des projets." + err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>, project: ModelProject) => {
        gsap.to(e.currentTarget, {
            scale: 1.2,
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

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    return (
        <div className='project col-md-12'>
            <div className="row">
                <div className="col-md-4 d-flex flex-column">
                    <h1 className="display-1 display-4-sm display-3-md display-2-lg display-1-xl title project-translate-right">Projects</h1>
                    {projects.map((project, index) => (
                        <div className={`d-flex project-container project-container-${index}`} key={project.id}>
                            <div className="">
                                <h2
                                    className="project-title title project-font-size"
                                    onMouseEnter={(e) => handleMouseEnter(e, project)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {project.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-8 d-flex flex-row justify-content-center position-relative ">
                    <img
                        id="project-image"
                        src={currentImage || ''}
                        alt="Project"
                        className="project-image img-fluid"
                        style={{ opacity: 0 }}
                    />
                </div>
            </div>
        </div>
    );
}