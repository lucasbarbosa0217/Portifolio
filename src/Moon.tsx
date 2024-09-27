import React, { useRef, useEffect, useState } from 'react';
import { Canvas, ThreeElements } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { Mesh, TextureLoader } from 'three';
import { motion } from 'framer-motion';
import * as THREE from "three"

// Componente para a lua
const Moon = ({ rotation }) => {
    const moonRef = useRef<>();
    const texture = useLoader(TextureLoader, '/moon.jpeg'); // Ajuste o caminho para o seu arquivo PNG

    // Atualiza a rotação da lua sempre que a prop 'rotation' mudar
    useEffect(() => {
        if (moonRef.current) {
            moonRef.current.rotation.y = rotation;
        }
    }, [rotation]);

    return (
        <>
            {/* Luz ambiente com maior intensidade */}
            <ambientLight intensity={3.0} color="#ffffff" /> {/* Luz branca */}
            {/* Luz spot com maior intensidade e cor branca */}
            <spotLight position={[5, 5, 5]} angle={0} intensity={1} color="#ffffff" />
         
        
            <mesh ref={moonRef} position={[0, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[3.05, 32, 32]} />
                <meshStandardMaterial map={texture}
              
                />
            </mesh>
        </>
    );
};

function MoonComponent() {
    const [rotation, setRotation] = useState(0);

    // Função para lidar com o scroll
    const handleScroll = (event) => {
        const delta = event.deltaY; // Captura a rotação do scroll
        setRotation((prevRotation) => prevRotation + delta * 0.0001); // Ajuste a sensibilidade aqui
    };

    // Adiciona o evento de scroll quando o componente é montado
    useEffect(() => {
        window.addEventListener('wheel', handleScroll);

        // Remove o evento de scroll quando o componente é desmontado
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return (
            <Canvas className=''>
                <Moon rotation={rotation} />
            </Canvas>
    );
}

export default MoonComponent;
