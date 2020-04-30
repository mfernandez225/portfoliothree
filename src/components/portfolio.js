import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white text-dark p-3">
      <div>
        <ul>
          <li>
            <h5 id="portfolioTitle" className="font-weight-bolder">
              Portfolio Section
            </h5>
          </li>
          <li className="list-inline font-weight-bolder">
            <a id="neurolens" href="https://neurolens.herokuapp.com/">
              <span className="portfolioLinks">Neurolens</span>
            </a>
          </li>
          <li className="list-inline font-weight-bolder">
            <a id="qiktik" href="https://qiktik.herokuapp.com/">
              <span className="portfolioLinks">QikTik</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
