import React from "react";

import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CP_Roadmap from "./components/CP_Roadmap"
import Landing_page from "./components/Landing_page"
import Map from "./Map";
import { Accordion,accordionItems } from "./components/Accordian";
function App() {
  
  return (
  <>
  <BrowserRouter>
      <Navbar/>    
      <Routes>
      <Route exact path="/" element={<Landing_page/>}></Route>
      <Route exact path="/department" element={<Roadmap/>}></Route>
      <Route exact path="/roadmap" element={<Map/>} ></Route>
      </Routes>
      </BrowserRouter>
  {/* <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
  <h1 className="text-4xl text-white font-extrabold mb-6 mt-20 w-3/4 text-center">
    Competitive Programming Roadmap
  </h1>
  <div className="container mx-auto py-6">
    {accordionItems.map((item, index) => (
      <Accordion key={index} title={item.title} content={item.content} />
    ))}
  </div>
</div> */}

{/* <Landing_page></Landing_page> */}
</>
  );
}

export default App;
