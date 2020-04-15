import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="headerBox bg-white text-dark">
      <div className="row">
        <img
          id="headshot"
          className=""
          src="images/headshot.jpg"
          alt="Headshot"
        />
        <ul className="mt-5">
          <li>
            <h1>Marc Fernandez</h1>
          </li>
          <li>
            <h3>Account Manager</h3>
          </li>
          <li>
            <h5>Eyebrain Medical</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
