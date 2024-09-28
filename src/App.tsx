import { useState } from 'react'
import MoonComponent from './Moon'
import "./App.css"
import Header from './components/Header'
import { useScroll, useMotionValueEvent } from 'framer-motion';
import SnapPage from './components/SnapPage';
import { MouseScroll } from "@phosphor-icons/react"

function App() {



  const [latestScroll, setLatestScroll] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest)
    setLatestScroll(latest)
  })

  return (
    <>
      <div className='noise-overlay'></div>
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

        <div className='star-overlay transition-all duration-1000'
          style={{
            opacity: latestScroll > 200 ? "0" : "1",
          }}
        ></div>


        <div className='w-[35rem] h-[35rem] fixed  glow rounded-full transition-all duration-700  '
          style={{
            right: latestScroll > 200 ? "-15rem" : "-5rem",
            bottom: latestScroll > 200 ? "-20rem" : "-10rem",
          }}
        ></div>
      </div>

      <Header />

      <div>
        <SnapPage>
          <div className='flex flex-start sm:self-start md:self-center'>
            <h1 className='text-7xl md:text-9xl h-full w-full mt-32 md:mt-0'>
              <span className='font-light'>Oi!</span>
              <span className='font-thin'> Eu sou o</span>
              <span className='font-medium'> Lucas</span>
              <span className='font-thin italic text-7xl pl-8'>:D</span>
            </h1>
          </div>
       
          <p className='absolute w-screen mb-12 flex justify-center bottom-0 left-0 animate-bounce'>
            <MouseScroll weight={"light"} size={32} />

          </p>
        </SnapPage>

        <SnapPage>Sessão 1</SnapPage>


        <SnapPage>Sessão 2</SnapPage>

      </div>

    </>

  )
}

export default App