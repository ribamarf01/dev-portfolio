import { useState, useEffect, useRef } from 'react'

import SpriteWalk from "./SpriteWalk"
import IntroCard from './IntroCard'

const Hero = () => {

  const [walkNpcs, setWalkNpcs] = useState(false)
  const mainRef = useRef<HTMLDivElement>()

  useEffect(() => {
    setWalkNpcs(true)
  }, [])

  const Sprites = <section>
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-1.gif"
      spriteSpeed={40}
      initialDirection='right'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Farmboy */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-2.gif"
      spriteSpeed={40}
      initialDirection='left'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Farmgirl */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-3.gif"
      spriteSpeed={80}
      initialDirection='right'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Old man */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-4.gif"
      spriteSpeed={20}
      initialDirection='right'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Children Redhair */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-5.gif"
      spriteSpeed={50}
      initialDirection='left'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Man */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-6.gif"
      spriteSpeed={45}
      initialDirection='left'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Woman */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-7.gif"
      spriteSpeed={70}
      initialDirection='left'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Old woman */}
    <SpriteWalk
      spriteUrl="/img/npc/npc-walk-8.gif"
      spriteSpeed={25}
      initialDirection='right'
      mainHeight={mainRef.current ? mainRef.current.offsetHeight : 0}
    />
    {/* Blonde child */}
  </section>

  return <main className="min-h-screen w-full bg-grass relative overflow-hidden flex items-center justify-center" ref={mainRef}>
    <IntroCard />
    {walkNpcs ?
      Sprites
      :
      ''
    }
  </main>
}

export default Hero