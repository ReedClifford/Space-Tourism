import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import burgerMenu from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import { useToggle } from "../hooks/useToggle";

import BurgerMenu from "../components/BurgerMenu";
const Navbar = () => {
  const { active, setActive } = useToggle();
  return (
    <Fragment>
      <nav className="flex justify-between z-40 items-center fixed top-0 w-full px-8 py-4">
        <div>
          <Link to="/">
            <img src={logo} alt="logo" className="w-12 cursor-pointer" />
          </Link>
        </div>
        <div>
          <img
            src={burgerMenu}
            alt="burgeMenu"
            className="w-7 cursor-pointer"
            onClick={() => setActive(!active)}
          />
        </div>
      </nav>
      {active ? <BurgerMenu /> : null}
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
