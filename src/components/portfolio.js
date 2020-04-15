import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="bg-white text-dark p-3">
      <div>
        <ul>
          <li>
            <h5 className="font-weight-bolder">Portfolio Section</h5>
          </li>
          <li className="list-inline font-weight-bolder">
            <a id="qiktik" href="https://qiktik.herokuapp.com/">
              <span className="portfolioLinks">QikTik</span>
            </a>
          </li>
          <li className="list-inline font-weight-bolder">
            <a id="qiktik" href="https://uciuserdirectory.herokuapp.com/">
              <span className="portfolioLinks">React User Directory</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
