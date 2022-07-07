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
    const height = Math.floor(Math.random() * mainHeight)
    imageRef.current.style.top = `${height}px`
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