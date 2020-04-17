import React from "react";

const Contact = () => {
  return (
    <div id="contactInfo" className="bg-white p-5 text-dark flex-fill">
      <div className="text-left">
        <h5 id="contactInfoTitle" className="font-weight-bolder">
          Contact Info
        </h5>
        <ul className="list-unstyled font-weight-bolder">
          <li className="mb-2">
            <i className="far fa-envelope text-dark mr-2"></i>
            <a
              id="email"
              href="mailto:mfernandez225@gmail.com?Subject=Nice%20to%20meet%20you!"
            >
              mfernandez225@gmail.com
            </a>
          </li>
          <li className="mb-2">
            <i className="fas fa-phone-alt mr-2 text-dark"></i>
            <a id="phoneNumber" href="tel:714-606-1431" className="text-dark">
              714-606-1431
            </a>
          </li>
          <li className="mb-2">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/marc-fernandez-02a20411a/"
              alt="linkedin"
            >
              <i className="fab fa-linkedin fa-2x mr-2 text-dark"></i>
            </a>
            <a
              className="github"
              href="https://github.com/mfernandez225"
              alt="Github"
            >
              <i className="fab fa-github fa-2x text-dark"></i>
            </a>
          </li>
          <li className="mb-2">
            <a id="My Resume" className="" href="images/Resume2019.pdf">
              My Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
