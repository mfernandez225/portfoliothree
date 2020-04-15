import React from "react";
import Header from "./components/header";
import Contact from "./components/contact";
import Bio from "./components/bio";
import Tools from "./components/tools";
import Portfolio from "./components/portfolio";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-5">
          <div className="cardBorder col-sm-6 d-flex">
            <Contact />
          </div>
          <div className="cardBorder col-sm-6 d-flex">
            <Tools />
          </div>
        </div>
        <div className="row mt-5">
          <div className="cardBorder col">
            <Bio />
          </div>
        </div>
        <div className="row my-5">
          <div className="cardBorder col">
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
