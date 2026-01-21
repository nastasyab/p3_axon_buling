import { NavLink, Outlet } from "react-router";
import "./Menu.css";

export function Menu() {
  return (
    <div className="page">
      <div className="menu-box">
        <h2>Menu</h2>
        <div className="menu">
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
      <Outlet /> {/* <-- das ist der Inhalt der Seite */}
    </div>
  );
}
