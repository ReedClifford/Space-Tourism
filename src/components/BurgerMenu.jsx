import { NavLink } from "react-router-dom";
import close from "../assets/shared/icon-close.svg";
import { useToggle } from "../hooks/useToggle";
const BurgerMenu = () => {
  const { active, setActive } = useToggle();
  const toggleHandler = () => {
    setActive(!active);
  };
  return (
    <div className="z-50">
      <div
        className="absolute inset-0 h-full w-full "
        onClick={toggleHandler}
      ></div>
      <aside className="sideBar">
        <div className="w-full flex justify-end">
          <img
            src={close}
            alt="close"
            className="cursor-pointer mt-5 mr-7 w-7"
            onClick={toggleHandler}
          />
        </div>

        <div className="sideBarLinkContainer ">
          <NavLink to="/">
            <h1 className="sideBarLinks " onClick={toggleHandler}>
              <span className="font-bold ">00</span>HOME
            </h1>
          </NavLink>
          <NavLink to="/destination">
            <h1 className="sideBarLinks " onClick={toggleHandler}>
              <span className="font-bold ">01</span>DESTINATION
            </h1>
          </NavLink>
          <NavLink to="/crew">
            <h1 className="sideBarLinks " onClick={toggleHandler}>
              <span className="font-bold ">02</span>CREW
            </h1>
          </NavLink>
          <NavLink to="/technology">
            <h1 className="sideBarLinks " onClick={toggleHandler}>
              <span className="font-bold ">03</span>TECHNOLOGY
            </h1>
          </NavLink>
        </div>
      </aside>
    </div>
  );
};
export default BurgerMenu;
