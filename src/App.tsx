import { useState } from 'react'
import MoonComponent from './Moon'
import "./App.css"
import Header from './components/Header'
import { useScroll, useMotionValueEvent } from 'framer-motion';
import SnapPage from './components/SnapPage';
import { MouseScroll } from "@phosphor-icons/react"
import Letreiro from './components/Letreiro';

function App() {



  const [latestScroll, setLatestScroll] = useState(0);

  const { scrollY } = useScroll();

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    setLatestScroll(latest)
  })

  return (
    <>

      <div className='noise-overlay'></div>
      <div className='star-overlay transition-all duration-1000'
        style={{
          opacity: latestScroll > 200 ? "0" : "1",
        }}
      ></div>


      <div className='transition-all duration-500 fixed moon'
        style={{ opacity: latestScroll > 200 ? "0.3" : "1" }}
      >
        <div className=' fixed w-[35rem] h-[35rem] flex moon transition-all duration-700'
          style={{
            right: latestScroll > 200 ? "-15rem" : "-5rem",
            bottom: latestScroll > 200 ? "-20rem" : "-10rem",
          }}

        >
          <MoonComponent />
        </div>

     
        <div className='w-[35rem] h-[35rem] fixed  glow rounded-full transition-all duration-700  '
          style={{
            right: latestScroll > 200 ? "-15rem" : "-5rem",
            bottom: latestScroll > 200 ? "-20rem" : "-10rem",
          }}
        ></div>
      </div>



      <Header />

      <SnapPage>
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

        <p className='absolute w-full mb-12 flex justify-center bottom-0 left-0 animate-bounce'>
          Rola a tela pra baixo!

          <MouseScroll weight={"light"} size={32} />
        </p>
      </SnapPage>

      <SnapPage>
        <Letreiro>MEUS PROJETOS FRONTEND</Letreiro>

      </SnapPage>


      <SnapPage>
        <Letreiro>MEUS PROJETOS BACKEND</Letreiro>


      </SnapPage>



    
      


    </>

  )
}

export default App