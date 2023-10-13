import Typed from "typed.js";
import { useRef, useEffect } from "react";
import avatar from "./assets/myimg.jpeg";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Business Analyst & Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backdDelay: 1000,
      loop: true,
    });
    // const typed = new Typed(el.current, {
    //   strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
    //   typeSpeed: 50,
    // });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Navigation />
      <Home el={el} avatar={avatar} />
      <About avatar={avatar} />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
