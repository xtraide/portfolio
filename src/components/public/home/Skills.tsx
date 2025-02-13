import { useRef, useState } from 'react';
import ImageSlider from "../utiles/ImageSlider";
import gsap from 'gsap';

export default function Skills() {

    const imagesTechno = [
        "/public/ICONE/html-5.png",
        "/public/ICONE/css-3.png",
        "/public/ICONE/js.png",
        "/public/ICONE/java.png",
        "/public/ICONE/php.png",
        "/public/ICONE/python.png",
        "/public/ICONE/serveur-sql.png",
        "/public/ICONE/typescript.png",
        "/public/ICONE/gsap.png",
        "/public/ICONE/threeJs.png",
    ];

    const imagesFramework = [
        "/public/ICONE/bootstrap.png",
        "/public/ICONE/springboot.png",
        "/public/ICONE/react.png",
        "/public/ICONE/angular.png",
    ];

    const imagesOutils = [
        "/public/ICONE/git.png",
        "/public/ICONE/vscode.png",
        "/public/ICONE/postman.png",
        "/public/ICONE/docker.png",
        "/public/ICONE/figma.png",
        "/public/ICONE/linux.png",
        "/public/ICONE/nodeJs.png",
    ];

    const [selectedImages, setSelectedImages] = useState(imagesTechno);

    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

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

        <div className='col-12 p-0 '>
            <h1 className="display-1 display-4-sm display-3-md display-2-lg display-1-xl title translate-left">Compétences</h1>
            <div className='d-flex justify-content-center basic-text'>
                <div className="box2 card-bg m-md-3"
                    ref={card1Ref}
                    onMouseEnter={() => handleMouseEnter(card1Ref)}
                    onMouseLeave={() => handleMouseLeave(card1Ref)}
                >
                    <div className="border borderTop top-fromLeft"></div>
                    <div className="border borderRight right-fromTop"></div>
                    <div className="border borderBottom bottom-fromRight"></div>
                    <div className="border borderLeft left-fromBottom"></div>
                    <button className="btn btn-dark btn-lg" onClick={() => setSelectedImages(imagesTechno)}>Technologies</button>
                </div>
                <div className="box2 card-bg m-md-3"
                    ref={card2Ref}
                    onMouseEnter={() => handleMouseEnter(card2Ref)}
                    onMouseLeave={() => handleMouseLeave(card2Ref)}
                >
                    <div className="border borderTop top-fromLeft"></div>
                    <div className="border borderRight right-fromTop"></div>
                    <div className="border borderBottom bottom-fromRight"></div>
                    <div className="border borderLeft left-fromBottom"></div>
                    <button className="btn btn-dark btn-lg" onClick={() => setSelectedImages(imagesFramework)}>Frameworks</button>
                </div>
                <div className="box2 card-bg m-md-3"
                    ref={card3Ref}
                    onMouseEnter={() => handleMouseEnter(card3Ref)}
                    onMouseLeave={() => handleMouseLeave(card3Ref)}
                >
                    <div className="border borderTop top-fromLeft"></div>
                    <div className="border borderRight right-fromTop"></div>
                    <div className="border borderBottom bottom-fromRight"></div>
                    <div className="border borderLeft left-fromBottom"></div>
                    <button className="btn btn-dark btn-lg" onClick={() => setSelectedImages(imagesOutils)}>Outils</button>
                </div>
            </div>
            <ImageSlider images={selectedImages} />
        </div>

    );
};