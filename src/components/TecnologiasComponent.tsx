import React from 'react';
import Tecnologias from '../models/Tecnologias';


interface PropsTecnologias {
    tecnologias: Tecnologias;
}

const TecnologiasComponent: React.FC<PropsTecnologias> = ({ tecnologias }) => {
    const icons = {
        Spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        Typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        Javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        FramerMotion: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
        NodeJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        Html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        Css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
        NextJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
        Android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
        Maven: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
        Gradle: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
        Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    };

    return (
            <div className='flex flex-row justify-end gap-2 w-full'>
                {Object.keys(tecnologias).map((tech) => {
                    if (tecnologias[tech as keyof typeof tecnologias]) {
                        return (
                            <img
                                key={tech}
                                src={icons[tech as keyof typeof icons]}
                                alt={tech}
                                style={{ width: '2rem', height: '2rem' }}
                            />
                        );
                    }
                    return null;
                })}
            </div>
    );
}

export default TecnologiasComponent;
