import { Fragment } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import burgerMenu from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import { useToggle } from "../hooks/useToggle";

import BurgerMenu from "../components/BurgerMenu";
const Navbar = () => {
  const { active, setActive } = useToggle();
  return (
    <Fragment>
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-12 cursor-pointer" />
          </Link>
        </div>
        <div className="block md:hidden">
          <img
            src={burgerMenu}
            alt="burgeMenu"
            className="w-7 cursor-pointer block md:hidden"
            onClick={() => setActive(!active)}
          />
        </div>

        <div className="hidden  md:block ">
          <div className="tabletNavlinkContainer">
            <NavLink to="/" className="tabletNavlink">
              HOME
            </NavLink>
            <NavLink to="/destination" className="tabletNavlink">
              DESTINATION
            </NavLink>
            <NavLink to="/crew" className="tabletNavlink ">
              CREW
            </NavLink>
            <NavLink to="/technology" className="tabletNavlink ">
              TECHNOLOGY
            </NavLink>
          </div>
        </div>
      </nav>
      {active ? <BurgerMenu /> : null}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
