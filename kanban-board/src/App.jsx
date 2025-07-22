import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import KanbanBoard from "./components/KanbanBoard";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
  
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<KanbanBoard />} />
          </Routes>
        </main>
        <Footer />
   
    </div>
  );
};

export default App;
