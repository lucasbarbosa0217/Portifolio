import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { List, X } from '@phosphor-icons/react';

function Header() {

  const [hidden, setHidden] = useState(false);
  const [latestScroll, setLatestScroll] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);


  const resize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [])


  useEffect(() => {
    if (windowWidth > 700) {
      setIsVisible(false)
    }

  }, [windowWidth])

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    setLatestScroll(latest)
    console.log(latest)
    if (previous === undefined) return
    if (latest > previous && latest > 90) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })

  function hideMenu() {
    setIsVisible(false)

    setTimeout(() => {
      if (
        latestScroll > 300
      ) {
        setHidden(true)
      }



    }, 1000);
  }

  return (
    <>
      <motion.div
        variants={{
          visible: { y: "0" },
          hidden: { y: "-120%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.2 }}
        style={{
          backgroundColor: latestScroll > 90 ? "#000000" : "transparent",
          padding: latestScroll > 90 ? "1rem" : "2rem 2rem 0 1.5rem"
        }}
        className='w-full flex justify-center flex-col fixed  top-0 z-30 transition-all duration-200'>
        <div className=' flex justify-end items-center'>

          <nav>
            {window.innerWidth > 700 ?

              <ul className='flex gap-4 text-lg text-stone-300'>
                <li className='border border-stone-300 p-2 px-4 rounded-2xl'>
                  <a href="#home">Home</a>
                </li>
                <li className='border border-stone-300 p-2 px-4 rounded-2xl'>
                  <a href="#sobre" onClick={hideMenu}>Sobre</a>
                </li>
                <li className='border border-stone-300 p-2 px-4 rounded-2xl'>
                  <a href="#front" onClick={hideMenu}>Frontend</a>
                </li>
                <li className='border border-stone-300 p-2 px-4 rounded-2xl'>
                  <a href="#back" onClick={hideMenu}>Backend</a>
                </li>
              </ul>


              :
              <button className='flex items-center' onClick={() => setIsVisible(!isVisible)}>
                <List size={42} />
              </button>

            }

          </nav>

        </div>

        {latestScroll > 80 ? "" : <hr className='mt-4 border-stone-800'></hr>}


      </motion.div>

      <AnimatePresence>
        {isVisible && (<motion.div
          initial={{ x: '200vw' }}
          animate={{ x: 0 }}
          exit={{ x: '200vw' }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.3 }}
          className='fixed z-50 w-[80vw] h-[100dvh] flex flex-col  bg-stone-100 text-stone-900 bottom-0 right-0 touch-none'
        >
          <button className='flex items-center w-fit justify-end self-end p-4' onClick={() => setIsVisible(!isVisible)}>
            <X size={42} />
          </button>
          <div className='flex flex-col text-lg'>
            <a
              className='bg-stone-200 p-2 px-4 hover:bg-stone-300'
              href="#home"
              onClick={() => { setIsVisible(false); }}
            >
              Home
            </a>
            <a
              className='bg-stone-200 p-2 px-4 hover:bg-stone-300'
              href="#sobre"
              onClick={hideMenu}
            >
              Sobre
            </a>
            <a
              className='bg-stone-200 p-2 px-4 hover:bg-stone-300'
              href="#front"
              onClick={hideMenu}
            >
              Frontend
            </a>
            <a
              className='bg-stone-200 p-2 px-4 hover:bg-stone-300'
              href="#back"
              onClick={hideMenu}
            >
              Backend
            </a>
          </div>



        </motion.div>)}

      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (<motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.3 }}
          className='fixed z-40 w-screen h-screen bg-stone-900 bottom-0 right-0 cursor-pointer touch-none'
          onClick={() => setIsVisible(!isVisible)}
        >

        </motion.div>)}

      </AnimatePresence>


    </>
  )
}

export default Header