import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/Micheal-Tim-Logo.png";
const Navigation = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>

      {/* <i className='bx bx-menu' id="menu-icon"></i> */}

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About </a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};
export default Navigation;
