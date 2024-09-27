import React, { useState } from 'react'
import {motion,  useMotionValueEvent, useScroll} from 'framer-motion'

function Header() {

  const [hidden, setHidden] = useState(false);
  const [latestScroll, setLatestScroll] = useState(0);

  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest)
    setLatestScroll(latest)
    if(previous === undefined) return
    if(latest > previous && latest > 150){
      setHidden(true);
    }else{
      setHidden(false)
    }
  })

  return (
    <motion.div 
    variants={{
      visible: {y: "0"},
      hidden: {y: "-120%"}
    }}
    animate={hidden? "hidden" : "visible"}
    transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
      style={{ backgroundColor: latestScroll > 200 ? "#2e1065": "inherit", padding: latestScroll > 200 ? "1rem" : "2rem"}}
    className='w-full bg-indigo-950 h-24 sticky top-0 z-10 transition-all duration-500'>Header</motion.div>
  )
}

export default Header