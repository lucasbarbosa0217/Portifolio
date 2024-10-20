import React from 'react';
import Tecnologias from '../models/Tecnologias';


interface PropsTecnologias {
    tecnologias: Tecnologias;
}

const TecnologiasComponent: React.FC<PropsTecnologias> = ({ tecnologias }) => {
    const icons = {
        Spring: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
        React: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        Typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
        Javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
        FramerMotion: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
        NodeJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg",
        Html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg",
        Css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
        Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        Java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg",
        Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-plain.svg",
        NextJs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg",
        Kotlin: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-plain.svg",
        Android: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain.svg",
        Maven: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-plain.svg",
        Gradle: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg",
        Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        Mongo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
        Mongoose: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
        Postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg",
        MySql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    };


    return (
            <div className='flex flex-row justify-end gap-2 w-fit self-end rounded-lg tecnologias'>
                {Object.keys(tecnologias).map((tech) => {
                    if (tecnologias[tech as keyof typeof tecnologias]) {
                        return (
                            <img
                                key={tech}
                                src={icons[tech as keyof typeof icons]}
                                alt={tech}
                                className='rounded-full'
                                style={{ width: '2rem', height: '2rem', padding: "0.5rem", background: "white"}}
                            />
                        );
                    }
                    return null;
                })}
            </div>
    );
}

export default TecnologiasComponent;
