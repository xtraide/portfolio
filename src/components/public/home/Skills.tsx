import { useRef, useState } from 'react';
import ImageSlider from "../utiles/ImageSlider";
import gsap from 'gsap';

export default function Skills() {

    const imagesTechno = [
        "/ICONE/html-5.png",
        "/ICONE/css-3.png",
        "/ICONE/js.png",
        "/ICONE/java.png",
        "/ICONE/php.png",
        "/ICONE/python.png",
        "/ICONE/serveur-sql.png",
        "/ICONE/typescript.png",
        "/ICONE/gsap.png",
        "/ICONE/threeJs.png",
    ];

    const imagesFramework = [
        "/ICONE/bootstrap.png",
        "/ICONE/springboot.png",
        "/ICONE/react.png",
        "/ICONE/angular.png",
    ];

    const imagesOutils = [
        "/ICONE/git.png",
        "/ICONE/vscode.png",
        "/ICONE/postman.png",
        "/ICONE/docker.png",
        "/ICONE/figma.png",
        "/ICONE/linux.png",
        "/ICONE/nodeJs.png",
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

        <div className='col-11 p-0 justify-content-center d-flex flex-column'>
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