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
      text="This animated site was my first attempt at frontend design during CDAC 2023."
      link="/about"
      btnText="More About This"
    />
  ),
  3: (
    <InfoBox
      text="I'm currently building full-stack apps. This is where it all started!"
      link="/about"
      btnText="See Early Work"
    />
  ),
  4: (
    <InfoBox
      text="Want to see my latest projects? Visit my main GitHub or LinkedIn!"
      link="https://github.com/rangari-rani"
      btnText="Explore More"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
