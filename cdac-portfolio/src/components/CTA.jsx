import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const CTA = () => {
  return (
    <section className="cta flex items-center justify-between flex-wrap gap-2">
    <p className="text-m">
      Built with ❤️ by <span className="text-m font-medium">Rani Rangari</span>
    </p>
  
    <div className="flex items-center gap-4">
      <Link to="https://github.com/rangari-rani" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="text-xl hover:text-gray-700" />
      </Link>
      <Link to="https://www.linkedin.com/in/rani-rangari/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn} className="text-xl hover:text-blue-600" />
      </Link>
    </div>
  </section>
  
  )
}

export default CTA
