import "boxicons";

const Home = ({ el, avatar }) => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Timileyin Micheal.</h1>
        <h3>
          And I'm a <span className="multiple-text" ref={el} />
        </h3>
        <p>
          As a business analyst, I bridge technology and business, turning
          challenges into growth opportunities. I also craft intuitive websites,
          enhancing online presence using HTML
          <span className="tools">
            <i className="bx bxl-html5"></i>
          </span>
          , CSS{" "}
          <span className="tools">
            <i className="bx bxl-css3"></i>
          </span>
          , JAVASCRIPT{" "}
          <span className="tools">
            <i className="bx bxl-javascript"></i>
          </span>{" "}
          AND REACT{" "}
          <span className="tools">
            <i className="bx bxl-react"></i>
          </span>
          .
        </p>
        <div className="social-media">
          <a href="https://github.com/timinemcv">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/timileyinawotipe/">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1Z7hL8dDvBUc6PQCtC8F791Rvr5lbp0bc/view?usp=sharing"
          download=""
          className="btn"
        >
          Download Resume
        </a>
      </div>

      <div className="home-img">
        <img src={avatar} alt="" />
      </div>
    </section>
  );
};
export default Home;
