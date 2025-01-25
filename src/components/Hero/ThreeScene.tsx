// Filename: ThreeScene.tsx

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const eventDate = new Date('2025-03-28T00:00:00').getTime();
    
    const updateTimeLeft = () => {
      const now = new Date().getTime();
      setTimeLeft(eventDate - now);
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, roughness: 0.5, metalness: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    const fontLoader = new FontLoader();
    fontLoader.load('/path/to/font.json', (font) => {
      const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const textMesh = new THREE.Mesh(new TextGeometry('00:00:00', {
        font: font,
        size: 1,
        height: 0.1,
        curveSegments: 12,
        bevelEnabled: false,
      }), textMaterial);
      textMesh.position.set(-2, 0, 0); 
      scene.add(textMesh);

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01; 
        cube.rotation.y += 0.01;

        if (timeLeft > 0) {
          const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
          const seconds = Math.floor((timeLeft / 1000) % 60);
          textMesh.geometry.dispose();
          textMesh.geometry = new TextGeometry(
            `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`,
            {
              font: font,
              size: 1,
              height: 0.1,
              curveSegments: 12,
              bevelEnabled: false,
            }
          );
        } else {
          textMesh.geometry.dispose();
          textMesh.geometry = new TextGeometry('TIME\'S UP!', {
            font: font,
            size: 1,
            height: 0.1,
            curveSegments: 12,
            bevelEnabled: false,
          });
        }

        renderer.render(scene, camera);
      };
      animate();
    }, undefined, (error) => {
      console.error('An error happened while loading the font:', error);
    });

    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [timeLeft]);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default ThreeScene;