import React, { useRef } from 'react'
import MoonComponent from './Moon'
import "./App.css"
import Header from './components/Header'
import { useScroll, motion, useTransform, useInView } from 'framer-motion';

function App() {

  const ref = useRef(null);
  // Detecta quando o componente está na viewport
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div className='opacity-20 fixed'>
        <div className=' fixed w-[30rem] h-[30rem] flex moon'>
          <MoonComponent />
        </div>

        <div className='w-[30rem] h-[30rem] fixed  glow rounded-full  '></div>
      </div>
      
      <Header/>

      <motion.div className='flex flex-col justify-center w-full h-screen items-center'
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Animação ao entrar na tela
        viewport={{ once: true }} // Anima apenas uma vez
        transition={{ duration: 1 }} // Duração da animação
      >
        <h1 className=' font-light text-6xl'>Portifólio do Lucas veyrr.</h1>
        <h1 className=' font-light text-2xl'>Amo muito veyr ta ficando lindor</h1>
        <a href="#secao2">Ir para Seção 1</a>
      </motion.div>

      <motion.div className='flex flex-col justify-center w-full h-screen items-center'
        initial={{ opacity: 0, y: 50 }} // Estado inicial
        whileInView={{ opacity: 1, y: 0 }} // Animação ao entrar na tela
        viewport={{ once: true }} // Anima apenas uma vez
        transition={{ duration: 1 }} // Duração da animação
        id="secao2"
      >
        <h1 className=' font-light text-6xl'>Seção 2</h1>
      </motion.div>

      <motion.div className='flex flex-col justify-center w-full h-screen items-center'
     
        id="secao2"
      >
        <motion.h1 className=' font-light text-6xl'
          initial={{ opacity: 0, y: 50 }} // Estado inicial
          whileInView={{ opacity: 1, y: 0 }} // Animação ao entrar na tela
          viewport={{ once: true }} // Anima apenas uma vez
          transition={{ duration: 1 }} // Duração da animação
        >Seção 2</motion.h1>
      </motion.div>

    </>

  )
}

export default App