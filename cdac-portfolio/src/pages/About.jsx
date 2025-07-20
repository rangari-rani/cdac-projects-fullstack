import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className="max-container">
      <div className="max-w-2xl mx-auto text-center text-slate-500">
<h1 className="head-text mb-4">
  Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Rani Rangari</span>
</h1>


  <p className="mt-5">
    I'm a developer from <strong> Nagpur, India </strong>, and this portfolio features the projects I built during my
    <strong> CDAC (Centre for Development of Advanced Computing)</strong> training – Postgraduate Diploma in Advanced Computing, 2023.
  </p>
 <br/>
  <p>
    After completing my <strong>MCA (Master in Computer Applications) in 2022</strong>, CDAC helped me apply those foundations to
    <strong> industry-level, real-world projects</strong> — from scalable web apps to robust backend systems and secure REST APIs.
  </p>

<br/>
  <p>
    <em>Code matured, skills sharpened — this portfolio marks my transition toward production-grade engineering.</em>
  </p>
</div>


      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills (at the time)</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
       <h3 className="subhead-text">Experience & Training</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
  This phase includes my early professional journey — from full-time work at TCS to hands-on Java development internship and completing intensive CDAC training, gaining exposure to real-world coding, UI design, and collaborative development.
</p>

        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base">
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  )
}

export default About
