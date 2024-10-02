// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { motion } from 'framer-motion-3d';

const Earth = ({ rotation }) => {
    const earthRef = useRef();
    const texture = useLoader(TextureLoader, '/earth_texture.jpg');
    const [autoRotation, setAutoRotation] = useState(0);

    useEffect(() => {
        if (earthRef.current) {
            earthRef.current.rotation.y = autoRotation;
        }
    }, [rotation, autoRotation]);

    useEffect(() => {
        const animate = () => {
            setAutoRotation((prev) =>  prev - 0.01 );
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <>
            <ambientLight intensity={6.0} color="#ffffff" />
            <spotLight position={[1, 1, 1]} angle={0} intensity={2} color="#ffffff" />
            <mesh  ref={earthRef} position={[0, 0, 0]} castShadow receiveShadow>
                <sphereGeometry args={[0.75, 32, 32]} />
                <meshStandardMaterial map={texture} />
            </mesh>
        </>
    );
};

function EarthComponent() {
    return (
        <Canvas className=""
            camera={{ fov: 10, position: [0, 0, 10] }} // Ajuste do FOV e posição da câmera
>
            <motion.group
                animate={{
                    x: [3, -3], // Move from 5 (right) to -5 (left) in the X axis
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror", 
                    duration:6, 
                }}
            >
                <Earth />
            </motion.group>

        </Canvas>
    );
}

export default EarthComponent;
