import { NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/axon_logo_black.svg";
import "./Menu.css";

export function Menu() {
  return (
    <>
      <header className="menu">
        <nav className="menu-nav">
          {/* Logo links */}
          <NavLink
            to="/"
            end
            className="menu-logo"
            aria-label="Startseite"
          >
            <img src={logo} alt="AXON Logo" />
          </NavLink>

          {/* Zentrale Navigation */}
          <div className="menu-center">
            <NavLink to="/technologie">Technologie</NavLink>
            <NavLink to="/demo">Probiere es aus</NavLink>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
