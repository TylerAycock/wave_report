import logo from "../assets/weather.png";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" className="main-logo"/>
      <h1>Whats the Weather?</h1>
      <nav className="nav-bar">
        <NavLink to={'/'} className={({ isActive }) => (isActive ? "active" : "inactive")}>Home</NavLink>
        <NavLink to={'/search'} className={({ isActive }) => (isActive ? "active" : "inactive")}>Search</NavLink>
      </nav>
    </div>
  );
};

export default Header;
