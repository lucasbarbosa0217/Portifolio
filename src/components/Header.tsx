import  { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

function Header() {

  const [hidden, setHidden] = useState(false);
  const [latestScroll, setLatestScroll] = useState(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    console.log(latest)
    setLatestScroll(latest)
    if (previous === undefined) return
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.div
      variants={{
        visible: { y: "0" },
        hidden: { y: "-120%" }
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.2}}
      style={{
        backgroundColor: latestScroll > 300 ? "#2e1065" : "transparent",
        padding: latestScroll > 300 ? "1rem" : "3rem 3rem 0 3rem"
      }}
      className='w-full  fixed top-0 z-10 transition-all duration-500'>
        Header

        {latestScroll > 300 ? "" : <hr className='mt-4 border-stone-800'></hr> }
    </motion.div>
  )
}

export default Header