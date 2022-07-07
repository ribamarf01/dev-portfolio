import { useState, useEffect, useRef } from 'react'

import SpriteWalk from "./SpriteWalk"

const Hero = () => {

  const [walkNpcs, setWalkNpcs] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setWalkNpcs(true)
  })

  const Sprites = <section>
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-1.gif"
    spriteSpeed={40}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Farmboy */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-2.gif"
    spriteSpeed={40}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Farmgirl */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-3.gif"
    spriteSpeed={80}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Old man */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-4.gif"
    spriteSpeed={25}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Children Redhair */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-5.gif"
    spriteSpeed={50}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Man */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-6.gif"
    spriteSpeed={45}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Woman */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-7.gif"
    spriteSpeed={70}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Old woman */}
  <SpriteWalk
    spriteUrl="/img/npc/npc-walk-8.gif"
    spriteSpeed={25}
    initialDirection='right'
    mainHeight={mainRef.current.offsetHeight}
  />
  {/* Blonde child */}
    </section>

  return <main className="min-h-screen w-full bg-grass relative overflow-hidden" ref={mainRef}>
    { walkNpcs ? 
      Sprites  
      :
      ''  
    }
  </main>
}

export default Hero