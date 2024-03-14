import Link from 'next/link'
import React from 'react'

type Props = {}

const Project = ({title, link, blog, github, completed}: {title: string, link: string, blog: string, github: string, completed?: boolean}) => {
  return (
    <div className='flex flex-col justify-center items-start'>
      <h1 className='text-3xl'>{title}</h1>
      <div className='flex justify-start gap-5 items-center text-xl underline'>
        <Link href={blog}>Know More</Link>
        <Link href={link}>Visit</Link>
        <Link href={github}>Github</Link>
      </div>
    </div>
  )
}

const Projects = (props: Props) => {
  const projectList = [
    {
      title: "Title",
      link: "",
      blog: "",
      github: "",
      completed: false,
    },
  ]

  return (
    <div className='md:w-[50vw] md:h-[100vh]'>
      {
        projectList.map((project) => {
          return (
            <div className='md:h-1/5 w-full border border-x-white border-y-neutral-800 p-5' key={project.title}>
              <Project title={project.title} link={project.link} blog={project.blog} github={project.github} completed={project.completed} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Projects
