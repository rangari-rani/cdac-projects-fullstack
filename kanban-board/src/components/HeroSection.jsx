// import React from "react";
// import Events from '../assets/Events.mp4'
// import Tasks from '../assets/Tasks.mp4'
// const HeroSection = () => {
//   return (
//     <div className="flex flex-col items-center mt-6 lg:mt-8">
//       <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
//       Linking Productivity 
//         <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
//           {" "}
//           with Teamwork
//         </span>
//       </h1>
//       <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
//       By fostering collaboration, streamlining communication, and keeping tasks organized, teams can achieve their goals with greater efficiency and success.
//       </p>
//       <div className="flex justify-center my-10">
//         <a
//           href="/project"
//           className="bg-gradient-to-r from-blue-400 to-blue-800 py-3 px-4 mx-3 rounded-md"
//         >
//           Get Started {" "}
//         </a>
//         <a href="/about" className="py-3 px-4 mx-3 rounded-md border ">
//           Learn More {" "}
//         </a>
//       </div>
//       <div className="flex mt-10 justify-center">
//       <video autoPlay loop muted className="rounded-lg w-1/2 border-blue-700 shadow-blue-400 mx-2 my-4">
//       <source src={Events} type="video/mp4"/>
//       Your browser does not support the video tag 
//       </video>
//       <video autoPlay loop muted className="rounded-lg w-1/2 border-blue-700 shadow-blue-400 mx-2 my-4">
//       <source src={Tasks} type="video/mp4"/>
//       Your browser does not support the video tag 
//       </video>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
import React from "react";
import { useNavigate } from "react-router-dom";
import Events from "../assets/Events.mp4";
import Tasks from "../assets/Tasks.mp4";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-8 px-4">
      {/* Header Section */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold tracking-wide">
        Linking Productivity{" "}
        <span className="bg-gradient-to-r from-blue-300 to-blue-800 text-transparent bg-clip-text">
          with Teamwork
        </span>
      </h1>
      <p className="mt-6 sm:mt-10 text-lg sm:text-xl text-center text-neutral-500 max-w-4xl">
        By fostering collaboration, streamlining communication, and keeping tasks organized, teams can achieve their goals with greater efficiency and success.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex justify-center my-8 sm:my-10">
        <button
          onClick={() => handleNavigation("/project")}
          className="bg-gradient-to-r from-blue-400 to-blue-800 py-3 px-5 mx-3 rounded-md text-white font-semibold hover:from-blue-500 hover:to-blue-900 transition-all"
        >
          Get Started
        </button>
        <button
          onClick={() => handleNavigation("/about")}
          className="py-3 px-5 mx-3 rounded-md border border-blue-500 text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all"
        >
          Learn More
        </button>
      </div>

      {/* Video Section */}
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-5/12 border-2 border-blue-700 shadow-lg"
        >
          <source src={Events} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-5/12 border-2 border-blue-700 shadow-lg"
        >
          <source src={Tasks} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
