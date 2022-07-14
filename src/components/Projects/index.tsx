import ProjectCard from './ProjectCard'

export interface Project {
  name: string
  githubName: string
  liveLink?: string
  shortDescription: string
  projectImageUrl: string
}

const MY_PROJECTS: Project[] = [{
  name: "This portfolio",
  githubName: "dev-portfolio",
  liveLink: "",
  projectImageUrl: "portfolio.png",
  shortDescription: "My front-end dev portfolio"
}, {
  name: "Know Your Price!",
  githubName: "know-your-price",
  liveLink: "know-your-price",
  projectImageUrl: "know-your-price.png",
  shortDescription: "A landing page for a product pricing website (price calculator coming soon)."
}, {
  name: "Burger Stacker",
  githubName: "burger-stacker",
  liveLink: "burger-stacker",
  projectImageUrl: "burger-stacker.png",
  shortDescription: "A small game in React where you create random burgers in 30 seconds to get points."
}, {
  name: "Valorant Arsenal",
  githubName: "valorant-arsenal-next",
  liveLink: "valorant-arsenal",
  projectImageUrl: "valorant-arsenal.png",
  shortDescription: "A collection arsenal maker for valorant skins, consuming from the unofficial ValorantAPI."
}, {
  name: "Wordle Clone",
  githubName: "wordle-clone-vue",
  liveLink: "wordle-clone-vue",
  projectImageUrl: "wordle-clone.gif",
  shortDescription: "Another wordle clone (maked on wordle hype) created in VueJS."
}, {
  name: "Codepen Clone",
  githubName: "codepen-clone-vue",
  liveLink: "codepen-clone-vue",
  projectImageUrl: "codepen-clone.png",
  shortDescription: "A codepen clone with codemirror editor, created in VueJS."
}, {
  name: "Pokedex!",
  githubName: "pokedex-nuxtjs",
  liveLink: "pokedex",
  projectImageUrl: "pokedex.png",
  shortDescription: "A pokedex that consumes from the PokeAPI to show pokemon cards and each pokemon details."
}
// , {
//   name: "Git Dex",
//   githubName: "gitdex-vuejs",
//   liveLink: "gitdex-vuejs",
//   projectImageUrl: "",
//   shortDescription: "A small app that consumes Github API to get some info about the dev."
// }
]

const Projects = () => {
  
  return <div className="flex flex-col items-center p-8 bg-xiketic text-white font-pixellari gap-y-4" id="projects">
    <h1 className="text-4xl">Projects</h1>
    <div className="flex justify-center md:w-2/3 w-full items-center h-[64px] bg-grass rounded-xl mb-8">
      <img src="/img/me/spell.gif" alt="A gif of my sprite opening the arms" />
    </div>
    <div className="grid justify-center items-start place-items-center 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8 md:w-2/3 w-full">
      { MY_PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />) }
    </div>
  </div>  

}

export default Projects
