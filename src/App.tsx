import { useState } from 'react'
import MoonComponent from './Moon'
import "./App.css"
import Header from './components/Header'
import { useScroll, useMotionValueEvent } from 'framer-motion';
import SnapPage from './components/SnapPage';
import { MouseScroll } from "@phosphor-icons/react"
import Letreiro from './components/Letreiro';

import SwiperProject from './components/SwiperProject';
import ProjectCard from './components/ProjectCard';
import ListBackend from './components/ListBackend';
import {motion} from "framer-motion"

function App() {



  const [latestScroll, setLatestScroll] = useState(0);

  const [scrollProgress, setScrollProgress] = useState(0);


  const { scrollY, scrollYProgress } = useScroll();

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    setLatestScroll(latest)
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
    setScrollProgress(latest)
  })


  return (
    <>

      <div className='noise-overlay'></div>
      <div className='star-overlay transition-all duration-1000'
        style={{
          opacity: latestScroll > 200 && scrollProgress < 0.9  ? "0" : "1",
        }}
      ></div>


      <div className='transition-all duration-500 fixed moon'
        style={{ opacity: latestScroll > 200 && scrollProgress < 0.9 ? "0.3" : "1" }}
      >
        <div className=' fixed w-[40rem] h-[40rem] max-h-[80vh] max-w-[80vh]  flex moon transition-all duration-700'
          style={{
            right: latestScroll > 200 && scrollProgress < 0.9 ? "-15rem" : "-5rem",
            bottom: latestScroll > 200 && scrollProgress < 0.9 ? "-20rem" : "-10rem",
          }}

        >
          <MoonComponent />
        </div>

     
        <div className='w-[40rem] h-[40rem] max-h-[80vh] max-w-[80vh] fixed  glow rounded-full transition-all duration-700  '
          style={{
            right: latestScroll > 200 && scrollProgress < 0.9 ? "-15rem" : "-5rem",
            bottom: latestScroll > 200 && scrollProgress < 0.9 ? "-20rem" : "-10rem",
          }}
        ></div>
      </div>



      <Header />

      <SnapPage id="home" full={true}>
        <div className='flex flex-start flex-col sm:self-start md:self-center'>
          <h1 className='text-7xl md:text-9xl mt-32 md:mt-0'>
            <span className='font-light'>Oi!</span>
            <span className='font-thin'> Eu sou o<br/></span>
            <span className='font-medium'> Lucas</span>
            <span className='font-thin italic text-7xl '> :D</span>
          </h1>
          <p>
            Sou um desenvolvedor fullstack! e gosto um pouquinho de design tbm..!
          </p>
        </div>

        <p className='absolute w-full mb-12 flex justify-center items-center gap-1 bottom-0 left-0 animate-bounce'>
          Role a tela pra baixo!

          <MouseScroll weight={"light"} size={32} />
        </p>
      </SnapPage>

      <SnapPage id="sobre" grid={false}>
        <Letreiro>QUEM É LUCAS BARBOSA?</Letreiro>

      </SnapPage>

      <SnapPage id="front" grid={false}>
        <Letreiro>MEUS PROJETOS FRONTEND</Letreiro>
          <SwiperProject>
            <ProjectCard
              projectName='Re;Aprender'
              projectDescription="E-commerce de livros didáticos. Projeto integrador do Bootcamp de Java e React da Generation Brazil"
              repoUrl="https://github.com/Re-Aprender/FrontEnd"
              tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
              siteUrl='https://reaprenderlivros.netlify.app'
              imageUrl="/reaprender.webp"
            ></ProjectCard>

            <ProjectCard
              projectName='LuMusic'
              projectDescription="LuMusic é uma plataforma de streaming de músicas com foco no visual fofo e  cores pastéis."
              repoUrl="https://github.com/lucasbarbosa0217/Lumusic"
              tecnologias={{ React: true, Javascript: true, FramerMotion: true, Css: true, Tailwind: true }}
              siteUrl='https://lumusic.vercel.app/'
              imageUrl="/lulumusic.webp"
            ></ProjectCard>
         

          <ProjectCard
            projectName='LuLucasBlog'
            projectDescription="LuLucasBlog é o meu blog pessoal feito com React. Blogs podems ser pesquisados e usuários Admin tem acesso para criação de postagens."
            repoUrl="https://github.com/lucasbarbosa0217/React-Blog-Pessoal"
            tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
            siteUrl='https://lulucasblog.vercel.app/'
            imageUrl="/lulucasblog.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Pokédex Android'
            projectDescription="Projeto Android nativo feito com vase na api Pokéapi. Pokemons podem ser salvos localmente usando o banco de dados  Android Room."
            repoUrl="https://github.com/lucasbarbosa0217/Pokedex"
            tecnologias={{ Java: true, Android: true, Gradle: true}}
            imageUrl="/pokedex.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Y2K Chat'
            projectDescription="Prototipação no Figma de um chat inspirado no MSN e Windows Live Messenger"
            repoUrl="https://www.figma.com/community/file/1422726907446420885/y2k-chat"
            tecnologias={{ Figma: true}}
            imageUrl="/CHAT.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Gerador de Senha'
            projectDescription="Site simples de geração de senhas, estilizado com a biblioteca 7.css, inpirada no design aero do Windows 7"
            repoUrl="https://www.figma.com/community/file/1422726907446420885/y2k-chat"
            siteUrl='https://gerador-senha-theta.vercel.app/'
            tecnologias={{ Html: true, Css: true, Javascript: true }}
            imageUrl="/seven.webp"
          ></ProjectCard>

          </SwiperProject>

          
     

      </SnapPage>


      <SnapPage id="back" grid={false}>
        <div className=' grid grid-cols-1 md:grid-cols-2 w-full  items-centerflex-grow gap-8'>
        


          <div className='flex-col flex order-1 md:order-2 gap-16'>
            <h2 className='font-mono text-7xl md:text-8xl'>MEUS PROJETOS BACKEND
              <motion.span
                animate={{
                  opacity: [0, 0, 1, 1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0,
                    ease: "linear",
                    times: [0, 0.5, 0.5, 1]
                  }
                }}
              >_</motion.span>


            </h2>

            <ListBackend />
          </div>

        </div>
     
      </SnapPage>



    
      


    </>

  )
}

export default App