import styles from './header.module.css'

const Header = () => {
  
  return (
  <header className={`${styles.glassEffect} w-full h-16 bg-gray-400 bg-opacity-40 flex items-center justify-between fixed`}>    
    <h1 className="text-independence text-4xl ml-4 font-pixellari">Ribamar Filho</h1>
    <ul className='text-rhythm text-3xl font-pixellari flex gap-8 mr-4'>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
      <li>Item</li>
    </ul>
  </header>
  )
}

export default Header