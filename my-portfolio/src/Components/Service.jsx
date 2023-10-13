import React from "react";

const Service = () => {
  return (
    <section className="service" id="services">
      <div className="service-holder">
        <h2 className="heading">
          Our <span>Skills</span>
        </h2>

        <div className="services-container">
          <div className="service-box">
            <i className="bx bx-code-alt"></i>
            <h3>Basic</h3>
            <p>
              {" "}
              JavaScript, <br /> CSS, <br /> HTML, <br /> C#
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
          </div>
          <div className="service-box">
            <i className="bx bxs-palette"></i>
            <h3>Frameworks & Tools </h3>
            <p>
              {" "}
              Nextjs, <br /> Reactjs, <br /> Tailwindcss, <br /> Bootstrap,{" "}
              <br /> Git <br /> SQL
            </p>
            {/* <a href="#" className="btn">Read More</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
