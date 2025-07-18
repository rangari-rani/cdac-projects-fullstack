import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>Get In Touch <br className='sm:block hidden'/></p>
      <Link to='https://github.com/rangari-rani'>
      <FontAwesomeIcon icon={faGithub}/>
      </Link>
      <Link to='https://www.linkedin.com/in/rani-rangari/'>
      <FontAwesomeIcon icon={faLinkedinIn}/>
      </Link>
      
    </section>
  )
}

export default CTA
