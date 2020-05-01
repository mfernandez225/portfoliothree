import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="rounded-lg bg-white text-dark p-5">
      <div className="row row-cols-1 row-cols-lg-2">
        <div id="card" className="col">
          <h3 id="cardTitle" className="card-title text-center mb-4">
            Neurolens Flow Sheet
          </h3>
          <img
            id="portfolioLogo"
            src="../images/favicon.ico"
            className="card-img-top mx-auto d-block"
            alt="Neurolens Logo"
          />
          <div className="card-body">
            <p className="card-text">
              Sales tool used by Account Managers and Territoty Managers to view
              the impact of Neurolenses being incorparated into their practice.
            </p>
            <a
              id="link"
              href="https://neurolens.herokuapp.com/"
              className="text-primary"
            >
              Link
              <svg
                className="bi bi-arrow-right"
                width="2em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div id="card" className="col">
          <h3 id="cardTitle" className="card-title text-center mb-4">
            QikTik
          </h3>
          <img
            id="portfolioLogo"
            src="../images/Qlogo.png"
            className="card-img-top mx-auto d-block"
            alt="Neurolens Logo"
          />
          <div className="card-body">
            <p className="card-text">
              Final project for the UCI Coding Bootcamp. It's a full stack
              application for tracking and displaying current stock prices.
              Perfect for the new trader.
            </p>
            <a
              id="link"
              href="https://qiktik.herokuapp.com/"
              className="text-primary"
            >
              Link
              <svg
                className="bi bi-arrow-right"
                width="2em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
