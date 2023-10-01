import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing_page from "./components/Landing_page";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Sample from "./Sample";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing_page />}></Route>
          <Route exact path="/department" element={<Homepage />}></Route>
          <Route exact path="/roadmap" element={<Sample/>}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
