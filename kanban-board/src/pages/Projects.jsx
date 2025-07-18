import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../components/ProductPage'
import TopSellers from '../components/TopSellers'
import PopularBlogs from '../components/PopularBlogs'

const Projects = () => {
  return (
    <>
    <div className="flex h-screen">
      <Sidebar />

      <div className="rounded w-full flex justify-center flex-wrap">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
        <div >
          <TopSellers />
          <PopularBlogs />
        </div>
      </div>
      
    </div>
   
    </>
  );
};


export default Projects