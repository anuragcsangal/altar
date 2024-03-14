import React from 'react'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  return (
      <div className="w-[100vw] h-[100vh] md:w-[50vw] md:h-[100vh] px-5 md:pl-5 border border-r-white md:border-r-neutral-800 border-y-white border-l-white flex flex-col justify-around">
        <div className='absolute opacity-0 md:opacity-100 lg:top-[60%] lg:left-[50%] transform origin-left md:rotate-[270deg] bg-white text-2xl'><p>Projects</p></div>
        <div className="text-7xl lg:text-9xl font-thin">
          <h1>Anurag</h1>
          <h1>Angal</h1>
        </div>
        <div className="pr-4 py-10 text-2xl  border border-y-neutral-800 border-x-white ">
          <h3 className="text-4xl mb-2">About Me</h3>
          <p>
            Hi, I&apos;m Anurag a Developer from India. 
            who likes to create beautiful websites as well as functional websites.
            <br />
            I love Computer Science and Mathematics. 
          </p>
          <button className='bg-zinc-300 rounded p-2 my-2 '>
            <Link href="/resume.pdf" target="_blank" className="text-xl">Resume</Link>
          </button>
        </div>
        <div className="text-2xl ">
          <h3 className="text-4xl mb-2">Skills</h3>
          <ul>
            <li>
              HTML, CSS, Javascript
            </li>
            <li>Typescript</li>
            <li>Golang</li>
            <li>C</li>
            <li>
              React, NextJS, GSAP, Framer-motion, Threejs, React-three-fiber
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Hero
