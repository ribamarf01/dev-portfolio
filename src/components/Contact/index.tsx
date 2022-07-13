const Contact = () => {

  return <div className="flex flex-col items-center p-8 gap-y-8 bg-xiketic font-pixellari text-white">
    <h1 className="text-4xl">Contact</h1>
    <div className="bg-grass flex justify-center items-center md:w-2/3 w-full h-[64px] rounded-xl">
      <img src="/img/me/curved.png" alt="My model sprite curved" />
    </div>
    <h2 className="text-3xl">You can find me at:</h2>
    <div className="flex flex-row justify-around items-center md:w-1/5 w-full ">
      <a href="https://github.com/ribamarf01/" rel="noreferrer" target="_blank">
        <img className="w-12 h-12 invert" src="/img/social/github.svg" alt="github icon link" />
      </a>
      <a href="https://www.instagram.com/ribamar.f01/" rel="noreferrer" target="_blank">
        <img className="w-12 h-12 invert" src="/img/social/instagram.svg" alt="instagram icon link" />
      </a>
      <a href="https://www.linkedin.com/in/ribamar-filho-01/" rel="noreferrer" target="_blank">
        <img className="w-12 h-12 invert" src="/img/social/linkedin.svg" alt="linkedin icon link" />
      </a>
    </div>

    <form className='flex flex-col items-center w-full mx-4 md:w-1/3' action="https://formspree.io/f/mdobrjqd" method="POST">

      <h2 className="text-3xl">Or send a message direct to my e-mail:</h2>

      <label className='text-xl py-2 text-alice-blue' htmlFor="name">Name:</label>
      <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3' placeholder='Your name' name='name' type="text" />

      <label className='text-xl py-2 text-alice-blue' htmlFor="email">E-mail:</label>
      <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3' placeholder='Your e-mail' name='email' type="text" />

      <label className='text-xl py-2 text-alice-blue' htmlFor="subject">Subject:</label>
      <input className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3' placeholder='Subject' name='subject' type="text" />

      <label className='text-xl py-2 text-alice-blue' htmlFor="message">Message:</label>
      <textarea className='text-alice-blue text-lg bg-transparent border-maya-blue border rounded outline-none text-center p-2 w-2/3 resize-none h-36' placeholder='Message' name='message' />

      <div className="py-2"></div>

      <button className='text-xl p-2 w-1/4 rounded-lg bg-rhythm hover:bg-blue-jeans duration-300 transition-all text-white' type='submit'>Send</button>

    </form>
  </div>

}

export default Contact