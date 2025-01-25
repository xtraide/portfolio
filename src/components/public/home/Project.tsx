import React, { useEffect, useState } from 'react'
import Projects from '../../services/Project'
import ModelProject from '../../models/ModelProject';
import { Carousel } from 'react-bootstrap';
import '../../../assets/styles/Project.css'
export default function Project() {

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [projects, setProjects] = useState<ModelProject[]>([]);
    const [bgColor, setBgColor] = useState('#fff');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await Projects.Read();

                setProjects(response);
                setBgColor(response[0].bgcolor);
            } catch (err) {
                setError("Erreur lors de la récupération des projets." + err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>Erreur: {error}</div>;
    }

    const handleSelect = (selectedIndex: any) => {
        setBgColor(projects[selectedIndex].bgcolor);
    };
    return (
        <div className='container-fluid p-0 wh-100'>
            <div style={{ backgroundColor: bgColor, transition: 'background-color 0.5s' }} className="vh-100 d-flex flex-column justify-content-center">
                <h1 className="mt-5 pt-5">Projects</h1>
                <Carousel onSelect={handleSelect} className="flex-grow-1">
                    {projects.map((project, index) => (
                        <Carousel.Item key={project.id} className="vh-100">
                            <div className="d-flex justify-content-center align-items-center vh-100">
                                <div className="card projectContainer" style={{ width: '25rem' }}>
                                    <img src={import.meta.env.VITE_FRONTEND_URL + project.frontimage} className="card-img-top" alt={project.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">{project.description}</p>
                                        <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Lien</a>
                                        <a href={project.github} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )

}