import React from 'react'
import {motion} from "framer-motion"
import "../App.css"
interface SnapProps {
    children: React.ReactNode;
    id: string
    grid? : boolean
}

const SnapPage: React.FC<SnapProps> = ({children, id, grid}: SnapProps) => {
  return (
    <motion.div id={id} className={`  relative z-20 flex justify-center w-full  h-full  ${grid === false ? "" : "items-center"} 
      `}
      >
      <div className={`border-b container  border-stone-800 w-full flex-grow p-4  min-h-screen h-full items-start  flex-nowrap justify-start gap-8 ${grid === false ? "flex flex-col" : "grid sm:grid-cols-1 md:grid-cols-2"}`}>
              {children}
          </div>

      </motion.div>
  )
}

export default SnapPage