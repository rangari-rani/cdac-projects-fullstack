import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from "../components/CTA"

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Developed during CDAC, these projects showcase my shift from academic theory to hands-on, real-world software development.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
  <h4 className='text-2xl font-poppins font-semibold'>
    {project.name}
  </h4>

  <ul className="mt-3 list-disc ml-4 text-sm text-slate-600">
    {project.description.map((point, i) => (
      <li key={`desc-${i}`}>{point}</li>
    ))}
    <li><strong>Tech Stack:</strong> {project.techStack}</li>
  </ul>
              <div className='flex gap-4 mt-3 items-center'>
                {project.demo?.trim() && (
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='font-semibold text-blue-600 flex items-center gap-1'
                    >
                  Live
                <img
                src={arrow}
                alt="Live Demo"
                className='w-4 h-4 object-contain'
                />
            </Link>
          )}
                  {project.github && (
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='font-semibold text-slate-700 underline underline-offset-4'
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects
 