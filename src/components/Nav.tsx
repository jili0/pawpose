import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/admin">Admin</NavLink>
    </nav>
  );
};

export default Nav;
