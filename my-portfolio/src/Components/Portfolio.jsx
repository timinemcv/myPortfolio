import React from "react";
import sample from "../assets/Tumblr-App.png";
import sample1 from "../assets/Google-Drive.png";
import sample2 from "../assets/dashboard.png";
import sample3 from "../assets/applepage.jpg";
import sample4 from "../assets/logic-operation.png";
import sample5 from "../assets/sassi.png";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-holder">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={sample5} alt="" />
            <div className="portfolio-layer">
              <h4>Cloth Designer</h4>
              <p>
                This is cloned sassiholford website, they are specialize in
                designing of wedding dresses.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={sample1} alt="" />
            <div className="portfolio-layer">
              <h4>Google Drive</h4>
              <p></p>
              <a href="https://github.com/timinemcv">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={sample2} alt="" />
            <div className="portfolio-layer">
              <h4>Funifier Dashboard</h4>
              <p>My BAGC workplacement Project</p>
              <a href="https://github.com/timinemcv">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={sample3} alt="" />
            <div className="portfolio-layer">
              <h4>Apple Website</h4>
              <p>Clone Apple Website using html and css</p>
              <a href="" target="_blank">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={sample4} alt="" />
            <div className="portfolio-layer">
              <h4>Logical Operation</h4>
              <p>Cloned logical operation Website. Click on the link below:</p>
              <a href="https://github.com/timinemcv">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>{" "}
          <div className="portfolio-box">
            <img src={sample} alt="" />
            <div className="portfolio-layer">
              <h4>Tumblr</h4>
              <p>Blog</p>
              <a href="https://github.com/timinemcv">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
