import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export default function Skills() {
    const canvasRef = useRef(null);
    const statsRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        let scene, camera, controls;
        let insetWidth, insetHeight;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
        renderer.setClearColor(0x282c34, 1);
        renderer.setAnimationLoop(animate);

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(-50, 0, 50);

        controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 10;
        controls.maxDistance = 500;

        // Create a sphere geometry with 8 segments
        const geo = new THREE.SphereGeometry(20, 4, 400);
        const edges = new THREE.EdgesGeometry(geo);
        const lineMaterial = new THREE.LineBasicMaterial({ color: 0x4080ff });
        const lineSegments = new THREE.LineSegments(edges, lineMaterial);
        const line2 = lineSegments.clone();
        const line3 = lineSegments.clone();
        const line4 = lineSegments.clone();

        line2.rotation.z = Math.PI / 2;
        line3.rotation.z = Math.PI / 4;
        line4.rotation.z = -Math.PI / 4;

        scene.add(lineSegments);
        scene.add(line2);
        scene.add(line3);
        scene.add(line4);

        // Load font and create text
        const loader = new FontLoader();
        let textMesh;
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
            const textGeometry = new TextGeometry('Hello Three.js!', {
                font: font,
                size: 5,
                height: 1,
                curveSegments: 12,
                bevelEnabled: true,
                bevelThickness: 0.5,
                bevelSize: 0.3,
                bevelOffset: 0,
                bevelSegments: 5
            });
            const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
            textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(-20, 0, 0);
            scene.add(textMesh);
        });

        window.addEventListener('resize', onWindowResize);
        onWindowResize();

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);

            insetWidth = window.innerHeight / 4;
            insetHeight = window.innerHeight / 4;
        }

        function animate() {
            if (textMesh) {
                textMesh.lookAt(camera.position);
            }
            renderer.render(scene, camera);
        }

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return (
        <div className='container-fluid  wh-100 p-0'>
            <div className="vh-100 d-flex flex-column  justify-content-center">
                <h1 className="mt-5 pt-5">Compétences</h1>
                <div className=" vh-100 d-flex flex-column justify-content-center ">
                    <div className='d-flex '>

                        <div className="vh-100 d-flex flex-column justify-content-center">

                            <canvas ref={canvasRef} />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}
