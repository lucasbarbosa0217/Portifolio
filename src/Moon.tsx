// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';


const Moon = ({ rotation }) => {
    const moonRef = useRef();
    const texture = useLoader(TextureLoader, '/moon.jpeg');
    const [autoRotation, setAutoRotation] = useState(0);

    useEffect(() => {
        if (moonRef.current) {
            moonRef.current.rotation.y = rotation + autoRotation; 
            moonRef.current.rotation.x = (rotation + autoRotation) / 3;
        }
    }, [rotation, autoRotation]);

    useEffect(() => {
        const animate = () => {
            setAutoRotation(prev => prev + 0.001); 
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (
        <>
            <ambientLight intensity={1.0} color="#ffffff" />
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
    const handleScroll = (event) => {
        const newRotation = window.scrollY * 0.005;
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
