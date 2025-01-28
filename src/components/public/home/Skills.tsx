import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import '../../../assets/styles/Skills.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Skills() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        let scene, camera, controls;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.setClearColor(0x000000, 0); // Fond transparent

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0, 65);
        controls = new OrbitControls(camera, renderer.domElement);
        controls.minDistance = 10;
        controls.maxDistance = 500;
        controls.enableZoom = false;

        const group = new THREE.Group();
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

        group.add(lineSegments);
        group.add(line2);
        group.add(line3);
        group.add(line4);

        const textMeshes = [];
        const loader = new FontLoader();
        const font_url = 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json';

        function writeText(text, x, y, z) {
            loader.load(font_url, function (font) {
                const textGeometry = new TextGeometry(text, { font: font, size: 1.5, height: 1, curveSegments: 5 });
                const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true });
                const textMesh = new THREE.Mesh(textGeometry, textMaterial);
                textMesh.position.set(x, y, z);
                textMeshes.push(textMesh);
                group.add(textMesh);
            });
        }

        writeText('React', 0, 0, 20);
        writeText('Angular', 0, 0, -20);
        writeText('Three.js', 20, 0, 0);
        writeText('Html Css', -20, 0, 0);
        writeText('Java / Spring', 0, 20, 0);
        writeText('JavaScript', 0, -20, 0);
        writeText('Php / Symfony', 15, 15, 0);
        writeText('Mysql', -15, -15, 0);
        writeText('TypeScript', 15, -15, 0);
        writeText('React Native', -15, 15, 0);

        window.addEventListener('resize', onWindowResize);
        onWindowResize();

        scene.add(group);

        function onWindowResize() {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            renderer.setSize(width, height, false);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }

        function animate() {
            requestAnimationFrame(animate);

            group.rotation.y += 0.001;
            group.rotation.x += 0.001;

            textMeshes.forEach(mesh => {
                mesh.lookAt(camera.position);
                const worldPosition = new THREE.Vector3();
                mesh.getWorldPosition(worldPosition);
                const distance = camera.position.distanceTo(worldPosition);
                mesh.material.opacity = Math.max(0, 1 - distance / 100);
            });

            renderer.render(scene, camera);
        }

        animate();

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    return (
        <div className='container-fluid p-0 skills-container col-md-10'>
            <div className="d-flex flex-column justify-content-center">
                <h1 className="title">Compétences</h1>
                <div className="d-flex flex-column justify-content-center">
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <h2 className="card-title text">Outils</h2>
                                    <ul className="list-unstyled text">
                                        <li><i className="fab fa-git-alt"></i> git</li>
                                        <li><i className="fas fa-code"></i> vscode</li>
                                        <li><i className="fas fa-paper-plane"></i> postman</li>
                                        <li><i className="fab fa-docker"></i> docker</li>
                                        <li><i className="fab fa-figma"></i> figma</li>
                                        <li><i className="fab fa-linux"></i> Linux</li>
                                        <li><i className="fab fa-node-js"></i> Node.js</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 d-flex flex-column justify-content-center'>
                            <canvas ref={canvasRef} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}