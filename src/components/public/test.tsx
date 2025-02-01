import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSnap: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const sections = Array.from(container.children) as HTMLElement[];

            // Activer GSAP ScrollTrigger avec snapping simulé
            sections.forEach((section, index) => {
                gsap.to(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top center",
                        end: "bottom center",
                        scrub: true,
                        snap: {
                            snapTo: 0.5, // Place le scroll au milieu de la section
                            duration: 0.5, // Durée du snapping
                            ease: "power1.inOut", // Animation de l'effet snap
                        },
                    },
                });
            });

            return () => {
                // Nettoyer les ScrollTriggers à la fin du cycle
                ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            };
        }
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                height: "100vh",
                overflow: "scroll",
                scrollSnapType: "y mandatory", // Optionnel : combiné avec GSAP
            }}
        >
            {["Section 1", "Section 2", "Section 3", "Section 4"].map((text, idx) => (
                <div
                    key={idx}
                    style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                        background: idx % 2 === 0 ? "#8e44ad" : "#3498db",
                        color: "white",
                    }}
                >
                    {text}
                </div>
            ))}
        </div>
    );
};

export default ScrollSnap;
