// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { Menu, X } from "lucide-react";
// import { navItems } from "./../constants/index";

// const Navbar = () => {
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const toggleNavbar = () => {
//     setMobileDrawerOpen(!mobileDrawerOpen);
//   };

//   return (
//     <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
//       <div className="container px-4 mx-auto relative text-sm ">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center flex-shrink-0">
//            <a href="/">
//             <img className="h-20 w-20 mr-2 " src={logo} alt="logo" /></a>
//           <a href="/">
//           <span className="text-xl tracking-tight">
//           Project Execution Hub{" "} </span>
//             </a> 
           
//           </div>
//           <ul className="hidden lg:flex ml-14 space-x-12">
//             {navItems.map((item, index) => (
//               <li key={index}>
//                 <a href={item.href}>{item.label}</a>
//               </li>
//             ))}
//           </ul>
//           <div className="hidden lg:flex justify-center space-x-12 items-center">
//           <span className="py-2 px-3 text-blue-400 font-bold ">Welcome Back!</span>
//             <a
//               href="/register"
//               className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
//             >
//               Create an account
//             </a>
//           </div>
//           <div className="lg:hidden md:flex flex-col justify-end">
//             <button onClick={toggleNavbar}>
//               {mobileDrawerOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//         {
//             mobileDrawerOpen && (
//                 <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
//                     <ul>
//                         {navItems.map((item, index)=>(
//                             <li key={index} className="py-4 ">
//                                 <a href={item.href}>{item.label}</a>
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="flex space-x-6">
                   
//                         <a href="/register" className="py-2 px-3  rounded-md bg-gradient-to-r from-blue-500 to-blue-800">Create an account  </a>
//                     </div>
//                 </div>
//             )
//         }
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { navItems } from "./../constants/index";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileDrawerOpen(false); // Close mobile drawer after navigation
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-20 w-20 mr-2 cursor-pointer"
              src={logo}
              alt="logo"
              onClick={() => handleNavigation("/")}
            />
            <span
              className="text-xl tracking-tight cursor-pointer"
              onClick={() => handleNavigation("/")}
            >
              Project Execution Hub{" "}
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="cursor-pointer">
                <span onClick={() => handleNavigation(item.href)}>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <span className="py-2 px-3 text-blue-400 font-bold">Welcome Back!</span>
            <button
              onClick={() => handleNavigation("/register")}
              className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md"
            >
              Create an account
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <span
                    className="cursor-pointer"
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={() => handleNavigation("/register")}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800"
              >
                Create an account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
