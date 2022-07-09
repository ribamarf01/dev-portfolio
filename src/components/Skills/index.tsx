const Skills = () => {

  return <main className="flex flex-col items-center p-8 bg-xiketic font-pixellari text-white">
    <h1 className="text-4xl text-center pb-4">Skills</h1>
    <div className="flex justify-around md:w-1/3 w-3/4 h-[64px] bg-grass rounded-xl">
      <img className="w-[64px] h-[64px]" src="/img/me/bow.gif" alt="My avatar shooting from a bow gif" />
      <img className="w-[64px] h-[64px] -scale-x-100" src="/img/target.gif" alt="A target being hitted by and arrow" />
    </div>
  </main>

}

export default Skills