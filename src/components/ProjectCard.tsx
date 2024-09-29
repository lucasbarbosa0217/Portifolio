import { AnimatePresence } from 'framer-motion'
import { FC, useState } from 'react'
import { motion } from "framer-motion"
import { GithubLogo } from '@phosphor-icons/react/dist/ssr';
import { Globe } from '@phosphor-icons/react';
import Tecnologias from '../models/Tecnologias';
import TecnologiasComponent from './TecnologiasComponent';

interface ProjectCardProps {
    projectName: string;
    repoUrl: string;
    siteUrl?: string;
    imageUrl?: string;
    projectDescription: string;
    tecnologias: Tecnologias;

}


const ProjectCard: FC<ProjectCardProps> = ({projectDescription, projectName, repoUrl, siteUrl, imageUrl, tecnologias}: ProjectCardProps) => {
    const [linksOpen, setLinksOpen] = useState(false);

    return (
        <div className='bg-stone-800 max-w-[25rem] w-full max-h-fit rounded-2xl overflow-hidden' >
            <div className='relative flex flex-col items-center overflow-hidden justify-center'>
                <AnimatePresence>
                    {linksOpen &&
                        <motion.div
                            initial={{ x: "-30%", opacity: 0 }}
                            animate={{ x: "0", opacity: 100 }}
                            exit={{ x: "-30%", opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className=' bg-stone-700 flex gap-2 text-3xl rounded-2xl p-2 px-4 z-50 absolute '
                        >
                            <a href={repoUrl}>  <GithubLogo className='hover:scale-125 transition-all duration-500' /></a>

                            {siteUrl && <a href={siteUrl}>
                                <Globe className='hover:scale-125 transition-all duration-500' />
                            </a>}

                        </motion.div>}
                </AnimatePresence>
                <img src={imageUrl} className={`rounded-t-2xl w-[25rem]  cursor-pointer transition-all duration-500 ${linksOpen && "blur-sm opacity-50"}`} onClick={() => { setLinksOpen(!linksOpen) }}></img>

            </div>
            <div className='flex flex-col gap-2 p-4'>
                <a onClick={() => { setLinksOpen(!linksOpen) }} className='cursor-pointer w-fit'>
                    <h1 className='inline text-2xl font-medium text-blue-400 hover:underline' >{projectName}</h1>
                </a>
                <p>{projectDescription}</p>

                <TecnologiasComponent tecnologias={tecnologias}></TecnologiasComponent>
            </div>

        </div>
    )
}

export default ProjectCard