import { FC, useRef, useEffect } from 'react'

import styles from './hero.module.css'

interface SpriteWalkProps {
  spriteUrl: string
  spriteSpeed: number
  initialDirection: 'right' | 'left'
  mainHeight: number
}

const SpriteWalk: FC<SpriteWalkProps> = ({ spriteUrl, initialDirection, mainHeight, spriteSpeed }) => {

  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const height = Math.floor(Math.random() * mainHeight) - 200 // Never too low
    imageRef.current.style.top = `${height + 100}px` // Above header
  })

  return (
    <img
    style={{
      animationIterationCount: 'infinite',
      animationDuration: `${spriteSpeed}s`,
      animationTimingFunction: 'linear'
    }}
      className={`absolute top-16 ${initialDirection === 'right' ? styles.spriteRightFaced : styles.spriteLeftFaced}`} src={spriteUrl} ref={imageRef}
    />
  )
}

export default SpriteWalk