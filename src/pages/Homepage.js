import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Entc from "./Roadmap/Entc";
import It from "./Roadmap/it";
import Comp from "./Roadmap/Comp";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Comp />
      <Entc />
      <It />
      <Footer />
    </div>
  );
}

export default Homepage;
