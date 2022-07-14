import { useState, useEffect } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './header.module.css'

const Header = () => {

  const router = useRouter()

  const [openMenu, setOpenMenu] = useState(false)
  const [anchors, setAnchors] = useState(false)

  useEffect(() => {
    router.pathname === "/" ? setAnchors(true) : setAnchors(false)
  }, [router.pathname])

  const menuAction = () => {
    setOpenMenu(!openMenu)
  }
  
  return (
  <header className={`${styles.glassEffect} w-full h-16 bg-gray-400 bg-opacity-40 flex items-center justify-between fixed z-50`}>
    <h1 className="text-white hover:text-independence duration-300 transition-colors md:text-4xl text-3xl ml-4 font-pixellari">
      <Link href="/">Ribamar Filho</Link>
    </h1>
    {
      openMenu ? 
      <svg onClick={() => menuAction()} className="w-6 h-6 md:hidden mr-4 text-white transition-colors duration-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      :
      <svg onClick={() => menuAction()} className="w-6 h-6 md:hidden mr-4 text-white transition-colors duration-300 cursor-pointer" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    }
    { anchors ? <div className={`text-rhythm md:text-3xl text-2xl font-pixellari flex md:flex-row flex-col md:static ${openMenu ? 'absolute' : 'md:flex hidden'} md:top-0 top-16 md:gap-8 mr-4 text-center md:w-auto w-full md:bg-transparent md:backdrop-blur-0 md:shadow-none ${openMenu ? styles.glassEffectMenu : ''}`}>
      <a onClick={() => setOpenMenu(false)} href="#about" className='md:py-0 py-2 md:text-white text-independence md:hover:text-independence md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>
        About me
      </a>
      <a onClick={() => setOpenMenu(false)} href='#skills' className='md:py-0 py-2 md:text-white text-independence md:hover:text-independence md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>
        Skills
      </a>
      <a onClick={() => setOpenMenu(false)} href="#projects" className='md:py-0 py-2 md:text-white text-independence md:hover:text-independence md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>
        Projects
      </a>
      <a onClick={() => setOpenMenu(false)} href="#contact" className='md:py-0 py-2 md:text-white text-independence md:hover:text-independence md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>
        Contact
      </a>
    </div> : ''}
  </header>
  )
}

export default Header