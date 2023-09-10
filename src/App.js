import React from "react";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CP_Roadmap from "./components/CP_Roadmap";
import Landing_page from "./components/Landing_page";
import Map from "./Map";
import { Accordion, accordionItems } from "./components/Accordian";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing_page />}></Route>
          <Route exact path="/department" element={<Roadmap />}></Route>
          <Route exact path="/roadmap" element={<Map />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
