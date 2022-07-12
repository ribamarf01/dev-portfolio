interface Projects {
  name: string
  githubName: string
  liveLink: string
  shortDescription: string
  projectImageUrl: string
}

const MY_PROJECTS: Projects[] = [{
  name: "This portfolio",
  githubName: "dev-portfolio",
  liveLink: "dev-portfolio-khaki",
  projectImageUrl: "",
  shortDescription: "My front-end dev portfolio"
}, {
  name: "Know Your Price!",
  githubName: "know-your-price",
  liveLink: "know-your-price",
  projectImageUrl: "",
  shortDescription: "A landing page for a product pricing website (price calculator coming soon)."
}, {
  name: "Burger Stacker",
  githubName: "burger-stacker",
  liveLink: "burger-stacker",
  projectImageUrl: "",
  shortDescription: "A small game in React where you create random burgers in 30 seconds to get points."
}, {
  name: "Valorant Arsenal",
  githubName: "valorant-arsenal-next",
  liveLink: "valorant-arsenal",
  projectImageUrl: "",
  shortDescription: "A collection arsenal maker for valorant skins, consuming from the unofficial ValorantAPI."
}, {
  name: "Wordle Clone",
  githubName: "wordle-clone-vue",
  liveLink: "wordle-clone-vue",
  projectImageUrl: "",
  shortDescription: "Another wordle clone (maked on wordle hype) created in VueJS."
}, {
  name: "Codepen Clone",
  githubName: "codepen-clone-vue",
  liveLink: "codepen-clone-vue",
  projectImageUrl: "",
  shortDescription: "A codepen clone with codemirror editor, created in VueJS."
}, {
  name: "Pokedex!",
  githubName: "pokedex-nuxtjs",
  liveLink: "pokedex-nuxtjs",
  projectImageUrl: "",
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

  const GITHUB_LINK = repo => `https://github.com/ribamarf01/${repo}`
  const DOMAIN = name => `https://${name}.vercel.app`
  
  return <div className="flex flex-col items-center p-8 bg-xiketic text-white font-pixellari gap-y-4">
    <h1 className="text-4xl">Projects</h1>
    div
  </div>  

}

export default Projects