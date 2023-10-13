// eslint-disable-next-line react/prop-types
const About = ({ avatar }) => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={avatar} alt="" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me!</span>
        </h2>
        <h3>Business Analyst & Frontend Developer</h3>
        <p>
          Hello, I'm Timileyin Awotipe.
          <br />a Business Analyst & Frontend developer based in Sudbury Canada.
          <br />
          As a postgraduate student specializing in IT Business Analysis at
          Cambrian College, <br /> at Cambrian College, Sudbury, ON,
          <br />
          I've garnered a year's worth of experience in web development.
          <br /> My technical proficiency spans across
          <br /> HTML, CSS, JavaScript, React, Next.js, C#, TailwindCSS,
          Bootstrap, and SQL.
          <br />
          Driven by a passion for continuous learning, I'm always on the lookout
          for fresh challenges in
          <br />
          the ever-evolving tech landscape.
        </p>

        {/* <a href="#" className="btn">Read more</a>  */}
      </div>
    </section>
  );
};
export default About;
