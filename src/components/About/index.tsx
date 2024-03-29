const About = () => {

  return <main className="p-8 bg-xiketic font-pixellari text-white flex flex-col gap-y-4" id="about">
    <h1 className="text-4xl text-center">About me</h1>
    <section className="flex flex-col items-center gap-y-8">
      
      <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-4 items-center gap-x-8">
        <img className={`w-48 h-48 z-20 rounded-full`} src="/img/me/draw.png" alt="A draw of me" />
        <div className="text-xl">
          <p className="text-3xl md:text-start text-center">Ribamar Filho</p>
          <p>Level: 21</p>
          <p>Class: Programmer</p>
          <p>Specialization: Front-End Developer</p>
        </div>
      </div>
      
      <a className="bg-red-500 md:w-2/6 sm:w-3/4 w-2/3 h-12 rounded-xl flex items-center justify-center gap-x-2" href="/curriculum.pdf" download>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
      </a>

      <div className="flex md:flex-row flex-col gap-x-8 lg:w-2/3 text-lg">
        <div className="flex flex-col gap-y-4 flex-1 text-justify">
          <p>I always loved digital games (Specially RPGs), always looking how they work and tried some times to build my own, but I was too dumb too them really work :(</p>
          <p>At 15 I started into code in the school, and I found myself doing something that I could do for the rest of my life. I&apos;m a kinda visual person so when I learned HTML and CSS, I imagined myself building a lot of cool stuff and I actually builded those things... made me a lot happy.</p>
        </div>
        <div className="flex flex-col gap-y-4 md:mt-0 mt-8 flex-1">
          <p><b>Perks: </b>Swift learner, good at communication and teamworker.</p>
          <p><b>Likes:</b> Programming, RPGs, Rock/Indie music and cats.</p>
          <p><b>Dislikes:</b> People who complains 24/7 about the same thing and twitter.</p>
        </div>
      </div>

    </section>
  </main>

}

export default About