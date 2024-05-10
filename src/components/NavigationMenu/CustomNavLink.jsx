import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

CustomNavLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

function CustomNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
      }
    >
      {children}
    </NavLink>
  );
}

export default CustomNavLink;
