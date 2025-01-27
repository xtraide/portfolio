
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Experience() {
    const experiences = [
        {
            year: "2022",
            title: "Stagiaire Développeur FullStack",
            company: "LIGM",
            duration: "3 mois",
            description: [
                "Création d’un site web et de son API",
                "Récolte et affichage de données de capteurs de qualité de l’air",
                "Modélisation 3D du bâtiment hôte",
                "Système de supervision",
                "Symfony - Angular"
            ],
            link: "https://ligm.u-pem.fr/",
            tech: "Symfony - Angular"
        },
        {
            year: "2021",
            title: "Stagiaire Développeur FullStack Junior",
            company: "STEVA",
            duration: "3 mois",
            description: [
                "Création de fonctionnalités sur un site web WordPress en modifiant le thème à l'aide de PHP.",
                "Contribution au développement d'un site interne sous Angular pour la gestion des maisons de retraite et des usagers",
                "Mise en place de serveurs pour héberger le site de l'entreprise et la configuration d'un système pour visualiser les caméras de surveillance"
            ],
            link: "https://www.steva.fr/",
            tech: "WordPress - Angular",
        }
    ];

    return (
        <div className='container-fluid  wh-100'>
            <div className="vh-100 d-flex flex-column  justify-content-center">
                <h1 className="mt-5 pt-5">Expériences Professionnelles</h1>
                <div className=" vh-100 d-flex flex-column justify-content-center s">
                    <div className="row">
                        {experiences.map((exp, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">{exp.year} - {exp.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted"><a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.company}</a> - {exp.duration}</h6>
                                    </div>
                                    <div className="card-body">
                                        <ul>
                                            {exp.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                        <p className="card-text"><strong>Technologies utilisées :</strong> {exp.tech}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}