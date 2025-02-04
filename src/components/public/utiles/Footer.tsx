import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import '../../../assets/styles/Footer.css';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Footer() {
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const card4Ref = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (cardRef: React.RefObject<HTMLDivElement>) => {
        if (cardRef.current) {
            gsap.killTweensOf(cardRef.current.querySelectorAll(".border"));
            gsap.timeline()
                .to(cardRef.current.querySelector(".top-fromLeft"), { scaleX: 1, duration: 0.15 }, ">")
                .to(cardRef.current.querySelector(".right-fromTop"), { scaleY: 1, duration: 0.15 }, ">")
                .to(cardRef.current.querySelector(".bottom-fromRight"), { scaleX: 1, duration: 0.15 }, ">")
                .to(cardRef.current.querySelector(".left-fromBottom"), { scaleY: 1, duration: 0.15 }, ">");
        }
    };

    const handleMouseLeave = (cardRef: React.RefObject<HTMLDivElement>) => {
        if (cardRef.current) {
            gsap.killTweensOf(cardRef.current.querySelectorAll(".border"));
            gsap.timeline()
                .to(cardRef.current.querySelector(".left-fromBottom"), { scaleY: 0, duration: 0.1 }, ">")
                .to(cardRef.current.querySelector(".bottom-fromRight"), { scaleX: 0, duration: 0.1 }, ">")
                .to(cardRef.current.querySelector(".right-fromTop"), { scaleY: 0, duration: 0.1 }, ">")
                .to(cardRef.current.querySelector(".top-fromLeft"), { scaleX: 0, duration: 0.1 }, ">")
                .set(cardRef.current.querySelectorAll(".border"), { clearProps: "all" });
        }
    };

    return (
        <div className="col-12">
            <h1 className="display-1 display-4-sm display-3-md display-2-lg display-1-xl title">Contactez-moi</h1>
            <div className="row mt-5">
                <div className="col-3 col-md-6 ">
                    <div className="card card-bg box2 m-md-3"
                        ref={card1Ref}
                        onMouseEnter={() => handleMouseEnter(card1Ref)}
                        onMouseLeave={() => handleMouseLeave(card1Ref)}
                    >
                        <div className="border borderTop top-fromLeft"></div>
                        <div className="border borderRight right-fromTop"></div>
                        <div className="border borderBottom bottom-fromRight"></div>
                        <div className="border borderLeft left-fromBottom"></div>
                        <a href={import.meta.env.VITE_Gihhub} className="ml-3 link-no-color">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="card-title">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                    <span className="ml-3 d-none d-md-inline">Github : xtraide</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-3 col-md-6 ">
                    <div className="card card-bg box2 m-md-3"
                        ref={card2Ref}
                        onMouseEnter={() => handleMouseEnter(card2Ref)}
                        onMouseLeave={() => handleMouseLeave(card2Ref)}
                    >
                        <div className="border borderTop top-fromLeft"></div>
                        <div className="border borderRight right-fromTop"></div>
                        <div className="border borderBottom bottom-fromRight"></div>
                        <div className="border borderLeft left-fromBottom"></div>
                        <a href={import.meta.env.VITE_Linkedin} className="ml-3 link-no-color">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="card-title">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    <span className="ml-3 d-none d-md-inline">Linkedin : Nicolas Thieblemont</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-3 col-md-6 ">
                    <div className="card card-bg box2 m-md-3"
                        ref={card3Ref}
                        onMouseEnter={() => handleMouseEnter(card3Ref)}
                        onMouseLeave={() => handleMouseLeave(card3Ref)}
                    >
                        <div className="border borderTop top-fromLeft"></div>
                        <div className="border borderRight right-fromTop"></div>
                        <div className="border borderBottom bottom-fromRight"></div>
                        <div className="border borderLeft left-fromBottom"></div>
                        <a href={`mailto:${import.meta.env.VITE_Email}`} className="ml-3 link-no-color">
                            <div className="card-body d-flex flex-column align-items-center">
                                <div className="card-title">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                    <span className="ml-3 d-none d-md-inline">{import.meta.env.VITE_Email}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-3 col-md-6 ">
                    <div className="card card-bg box2 m-md-3"
                        ref={card4Ref}
                        onMouseEnter={() => handleMouseEnter(card4Ref)}
                        onMouseLeave={() => handleMouseLeave(card4Ref)}
                    >
                        <div className="border borderTop top-fromLeft"></div>
                        <div className="border borderRight right-fromTop"></div>
                        <div className="border borderBottom bottom-fromRight"></div>
                        <div className="border borderLeft left-fromBottom"></div>
                        <div className="card-body d-flex flex-column align-items-center">
                            <div className="card-title">
                                <FontAwesomeIcon icon={faPhone} size="2x" />
                                <span className="ml-3 d-none d-md-inline">Téléphone : 06 04 40 65 20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}