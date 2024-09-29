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
    <motion.div id={id} className={` container m-auto  relative z-20 flex justify-center w-full min-h-screen h-screen   ${grid === false ? "" : "items-center"} 
        p-4 
      `}
      >
      <div className={`border-b  border-stone-800 w-full flex-grow  h-full items-start  flex-nowrap justify-start gap-16 ${grid === false ? "flex flex-col" : "grid sm:grid-cols-1 md:grid-cols-2"}`}>
              {children}
          </div>

      </motion.div>
  )
}

export default SnapPage