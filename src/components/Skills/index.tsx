import SkillList from "./SkillList"

const Skills = () => {

  return <main className="flex flex-col items-center p-8 bg-xiketic font-pixellari text-white">
    <h1 className="text-4xl text-center pb-4">Skills</h1>
    <div className="flex justify-around xl:w-1/3 w-full h-[64px] bg-grass rounded-xl mb-8">
      <img className="w-[64px] h-[64px]" src="/img/me/bow.gif" alt="My avatar shooting from a bow gif" />
      <img className="w-[64px] h-[64px] -scale-x-100" src="/img/target.gif" alt="A target being hitted by and arrow" />
    </div>
    <SkillList />
  </main>

}

export default Skills