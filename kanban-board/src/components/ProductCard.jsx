
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, name, image }) => {
  return (
    <div className='border p-4 rounded mb-4 w-full sm:w-[48%] md:w-[30%] lg:w-[100%]'>
      <Link to={`/project/${id}`}>
        {/* Uncomment and use the image if required */}
        <img src={image} alt={name} className='w-full h-32 object-cover mb-2 rounded' />
        <h5 className='font-normal text-center'>{name}</h5>
      </Link>
    </div>
  );
};

export default ProjectCard;
