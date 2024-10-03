import React from 'react'
import animation from "./letreiro.module.css"
interface LetreiroProps {
    children: React.ReactNode,
}

const Letreiro: React.FC<LetreiroProps> = ({children}: LetreiroProps) => {
  return (
      <div className={animation.animatedTextStrip + ` col-span-2 p-2 font-thin border-x border-stone-800 w-full`}>
      <h2 className={`text-7xl md:text-8xl ` + animation.marquee}>{children}</h2>
      <h2 className={`text-7xl md:text-8xl ` + animation.marquee}>{children}</h2>
    </div>
  )
}

export default Letreiro