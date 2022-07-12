import { FC } from 'react'

import { Project } from './index'

interface ProjectCardProps {
  project: Project
}

const ProjectCard: FC<ProjectCardProps> = ({ project: { name, githubName, liveLink, projectImageUrl, shortDescription } }) => {

  const GITHUB_LINK = repo => `https://github.com/ribamarf01/${repo}`
  const DOMAIN = name => `https://${name}.vercel.app`

  return <div className='border group relative'>
    <img className='inset-0' src={`/img/projects/${projectImageUrl}`} alt={name} />
    <div className='absolute opacity-0 group-hover:opacity-100 bg-gray-600 bg-opacity-80 inset-0 flex flex-col items-center justify-center p-4 gap-y-2'>
      <h1 className='text-2xl'>{name}</h1>
      <p className='text-lg text-justify'>{shortDescription}</p>
      <div className='flex flex-row justify-around w-full'>
        <a href={GITHUB_LINK(githubName)} className='flex flex-row items-center gap-x-4'>
          <img className='w-6 h-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          <span className='text-lg'>Repository</span>
        </a>
        <a href={DOMAIN(liveLink)} className='flex flex-row items-center gap-x-4'>
        <svg className="w-6 h-6" fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>
          <span className='text-lg'>Production</span>
        </a>
      </div>
    </div>
  </div>
}

export default ProjectCard 