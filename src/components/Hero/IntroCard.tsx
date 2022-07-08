import styles from './hero.module.css'

const IntroCard = () => {
  return (
    <div className='flex flex-col items-center gap-8 px-4 z-20'>
      <div className='relative w-48 h-48'>
        <img className={`absolute w-48 h-48 z-30 rounded-full ${styles.fadeFirst}`} src="https://github.com/ribamarf01.png" alt="My profile picture" />
        <img className={`absolute w-48 h-48 z-20 rounded-full`} src="/img/me/draw.png" alt="A draw of me" />
      </div>
      
      <div className={`flex flex-col items-center font-pixellari text-independence text-2xl text-center ${styles.glassEffect} p-4 border border-black rounded-xl`}>
        <img className='mb-4' src="/img/me/walk.gif" alt="A gif of me as a RPG Character" />
        <p className="text-3xl">Hi!</p>
        <p>My name is Ribamar :)</p>
        <p>I&apos;m a Front-End developer, wanna see my portfolio?</p>
        <div className='flex items-center justify-around mt-4 bg-play-button border-2 border-black rounded-3xl py-1 px-8 cursor-pointer hover:bg-play-button-active transition-colors duration-300'>
          <img className='h-10 w-10' src="/img/play-icon.png" alt="Play icon" />
          <p className='text-3xl text-white'>Start</p>
        </div>
      </div>
    </div>
  )
}

export default IntroCard