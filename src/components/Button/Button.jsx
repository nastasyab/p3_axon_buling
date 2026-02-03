import { NavLink } from "react-router-dom";
import "./Button.css";

export function Button({
  children,
  to,
  variant = "outline",
  onClick,
  type = "button",
}) {
  const className = `btn btn-${variant}`;

  // Wenn "to" vorhanden ist → Link
  if (to) {
    return (
      <NavLink to={to} className={className}>
        {children}
      </NavLink>
    );
  }

  // Sonst normaler Button
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
