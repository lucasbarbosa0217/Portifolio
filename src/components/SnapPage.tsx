import React from 'react'
import {motion} from "framer-motion"
import "../App.css"
interface SnapProps {
    children: React.ReactNode;
    id: string
    grid? : boolean
    full? : boolean
}

const SnapPage: React.FC<SnapProps> = ({children, id, grid, full}: SnapProps) => {
  return (
    <motion.div id={id} className={` container m-auto relative z-20 flex justify-center w-full  h-full    ${grid === false ? "" : "items-center"} 
      `}
      >
      <div className={`border-b   border-stone-800 w-full flex-grow px-4 py-16 flex gap-y-16   h-full items-start  flex-nowrap justify-around  ${grid === false ? "flex flex-col" : "grid sm:grid-cols-1 md:grid-cols-2"} 
      ${full === true && "min-h-[100dvh]"}`}>
              {children}
          </div>

      </motion.div>
  )
}

export default SnapPage