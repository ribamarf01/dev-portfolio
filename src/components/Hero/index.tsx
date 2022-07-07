import { useState, useEffect, useRef } from 'react'

import SpriteWalk from "./SpriteWalk"

const Hero = () => {

  const [walkNpcs, setWalkNpcs] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setWalkNpcs(true)
  })

  return <main className="min-h-screen w-full bg-grass relative overflow-hidden" ref={mainRef}>
    { walkNpcs ? 
      <SpriteWalk
        spriteUrl="/img/npc/npc-walk-1.gif"
        spriteSpeed={40}
        initialDirection='right'
        mainHeight={mainRef.current.offsetHeight}
      />
      :
      ''  
    }
  </main>
}

export default Hero