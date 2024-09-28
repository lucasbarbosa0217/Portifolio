import React from 'react'
import {motion} from "framer-motion"
import "../App.css"
interface SnapProps {
    children: React.ReactNode;
}

const SnapPage: React.FC<SnapProps> = ({children}: SnapProps) => {
  return (
    <motion.div className='snap-center container m-auto snap-normal relative z-20 flex justify-center w-full h-screen items-center
        p-4 
      '
      >
      <div className='border-b  border-stone-800 w-full flex-grow  h-full grid items-start sm:grid-cols-1 md:grid-cols-2'>
              {children}
          </div>

      </motion.div>
  )
}

export default SnapPage