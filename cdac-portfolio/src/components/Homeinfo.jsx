import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" alt="arrow icon" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I’m <span className="font-semibold">Rani Rangari</span> 👋
    </h1>
  ),
  2: (
    <InfoBox
      text="This animated site was part of my CDAC learning phase — where I deepened my frontend skills."
      link="/about"
      btnText="More About This"
    />
  ),
  3: (
    <InfoBox
      text="I'm currently building full-stack apps — this portfolio marks the phase where things got real!"
      link="/about"
      btnText="See Project Phase"
    />
  ),
  4: (
    <InfoBox
      text="Want to see more of my work? Check out my latest projects on GitHub or LinkedIn!"
      link="https://github.com/rangari-rani"
      btnText="Explore More"
    />
  ),
};


const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
