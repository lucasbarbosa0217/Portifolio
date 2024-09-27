import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, ThreeElements } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { motion } from 'framer-motion';
import * as THREE from "three"
import { OrbitControls } from '@react-three/drei';

// Componente para a lua
const Moon = ({ rotation }) => {
    const moonRef = useRef<>();
    const texture = useLoader(TextureLoader, '/moon.jpeg'); // Ajuste o caminho para o seu arquivo PNG

    // Atualiza a rotação da lua sempre que a prop 'rotation' mudar
    useEffect(() => {
        if (moonRef.current) {
            moonRef.current.rotation.y = rotation;
            moonRef.current.rotation.x = rotation / 3;

        }
    }, [rotation]);

    return (
        <>
            {/* Luz ambiente com maior intensidade */}
            <ambientLight intensity={1.0} color="#ffffff" /> {/* Luz branca */}
            {/* Luz spot com maior intensidade e cor branca */}
            <spotLight position={[5, 5, 5]} angle={0} intensity={1} color="#ffffff" />

        
            <mesh ref={moonRef} position={[0, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[3.05, 16, 16]} />
                <meshStandardMaterial map={texture}
              
                />
            </mesh>
        </>
    );
};

function MoonComponent() {
    const [rotation, setRotation] = useState(0);
    const handleScroll = (event) => {
        const newRotation = window.scrollY * 0.005; // Calcula nova rotação com base na posição do scroll
        setRotation(newRotation);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

            <Canvas className=''>

                <Moon rotation={rotation} />
            </Canvas>
           
    );
}

export default MoonComponent;
