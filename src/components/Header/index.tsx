import { useState } from 'react'

import styles from './header.module.css'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const menuAction = () => {
    setOpenMenu(!openMenu)
  }
  
  return (
  <header className={`${styles.glassEffect} w-full h-16 bg-gray-400 bg-opacity-40 flex items-center justify-between fixed z-50`}>
    <h1 className="text-independence hover:text-white duration-300 transition-colors md:text-4xl text-3xl ml-4 font-pixellari">Ribamar Filho</h1>
    {
      openMenu ? 
      <svg onClick={() => menuAction()} className="w-6 h-6 md:hidden mr-4 text-independence hover:text-white transition-colors duration-300 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      :
      <svg onClick={() => menuAction()} className="w-6 h-6 md:hidden mr-4 text-independence hover:text-white transition-colors duration-300 cursor-pointer" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
    }
    <ul className={`text-rhythm md:text-3xl text-2xl font-pixellari md:flex md:static ${openMenu ? 'block absolute' : 'hidden'} md:top-0 top-16 gap-8 mr-4 text-center md:w-auto w-full md:bg-transparent md:backdrop-blur-0 md:shadow-none ${openMenu ? styles.glassEffectMenu : ''}`}>
      <li className='md:py-0 py-2 hover:text-white md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>Skills</li>
      <li className='md:py-0 py-2 hover:text-white md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>Projects</li>
      <li className='md:py-0 py-2 hover:text-white md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>About me</li>
      <li className='md:py-0 py-2 hover:text-white md:hover:bg-transparent hover:bg-gray-400 duration-300 transition-colors cursor-pointer'>Contact</li>
    </ul>
  </header>
  )
}

export default Header