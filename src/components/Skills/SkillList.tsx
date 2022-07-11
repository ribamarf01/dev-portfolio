import { useState } from "react"

interface Skill {
  name: string
  description: string
  imgUrl: string
  rating: 'Novice' | 'Apprentice' | 'Adept' | 'Expert' | 'Master'
}

const SKILL_LIST: Skill[] = [{
  name: 'HTML',
  description: "HTML is the language that defines whats is in the page. When I'm writing it, I try to make it the most readable possible, know as semantic HTML.\nBecomes messy really fast.",
  imgUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  rating: "Master"
}, {
  name: "CSS",
  description: "Not gonna lie, I not very good at design, but I'm proud at my CSS skills. I can easily build something if I have in the mind or a view of it in Figma or other interface building tool.",
  imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  rating: "Expert"
}, {
  name: "JavaScript",
  description: "Atwood's Law: “Any application that can be written in JavaScript, will eventually be written in JavaScript.”. I love the way that a lot of things just became more easily with JS then other languages.",
  imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  rating: "Master"
}, {
  name: "TypeScript",
  description: "My first programming contact was with Java, and I spent much time that I expected programming in Java actually. I hated Java exaggerated type annotation for everything, make it really verbose, in contrast I love TS because it looks so more concise and types making more sense to use (also VSCode autocomplete is a total overkill <3).",
  imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  rating: "Expert"
}, {
  name: "React",
  description: "One of the main things that attracted me to React was it huge community, awesome TS support and most of the JS libraries are working good with React or have a React component version!",
  imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  rating: "Expert"
}, {
  name: "NextJS",
  description: "NextJS is a React framework to build static pages, and OMG NEXT IS SO GOOD. It's awesome how it's simplifies things like routing, data fetching and building pages. Builded over React, most of the things that work good in React works good in Next.",
  imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  rating: "Expert"
}, {
  name: "TailwindCSS",
  description: "Tailwind helps me to build fast interfaces with A LOT of pre-build classes, easier to create resposive design with easy to use breakpoints and easy to custom classes in the tailwind.config file (v3.1+ TS support is awesome!). Also has a direct and complete documentation.",
  imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  rating: "Master"
}]

const SkillList = () => {

  const [content, setContent] = useState<Skill>()
  const [revealedIndex, setRevealedIndex] = useState<number>(null)

  const handleReveal = (index: number) => {
    if(revealedIndex === index) setRevealedIndex(null)
    else setRevealedIndex(index)
  }
  
  return <div className="flex items-center md:w-2/3 w-full text-xl select-none">
    <div className="flex items-center justify-around w-full text-white gap-x-8">
      <ul className={`flex flex-col lg:w-1/2 w-full border rounded-lg p-4 h-[75vh] overflow-y-auto bg-paper text-independence`}>
        { SKILL_LIST.map((skill, index) => (<div  key={index}>
          <li className="flex flex-row flex-none items-center py-2 cursor-pointer relative group overflow-hidden" onClick={() => handleReveal(index)} onMouseEnter={() => setContent(skill)} onMouseLeave={() => setContent(null)} >
            <img className="h-16 w-16" src={skill.imgUrl} alt={skill.name} />
            <h1 className="w-full ml-4 text-2xl">{skill.name}</h1>
            <h2 className="md:block hidden">{skill.rating}</h2>
            <svg className={`w-7 h-7 md:rotate-0  ${revealedIndex === index ? 'rotate-90': ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
          </li>
          <p className={`text-justify md:hidden block ${revealedIndex === index ? 'block': 'hidden'}`}>{skill.description}</p>
          <div className="border-b border-b-independence"></div>
          </div>)) }
      </ul>
      <div className="w-1/2 min-h-[50vh] bg-paper text-independence rounded-lg lg:block hidden">
        { content ? 
          <div className="flex flex-col items-center h-full justify-center p-4">
            <h1 className="text-3xl pb-2">{content.name}</h1>
            <img className="h-32 w-32 pb-2" src={content.imgUrl} alt={content.name} />
            <h2 className="text-2xl pb-4">{content.rating}</h2>
            <p className="text-justify">{content.description}</p>

          </div> 
          :
          <h1 className="text-3xl flex items-center text-center justify-center h-full">Hover over to know more about the skill!</h1> 
        }
      </div>
    </div>
  </div>

}

export default SkillList
