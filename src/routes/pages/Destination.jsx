import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import mobileBg from "../../assets/destination/background-destination-mobile.jpg";
import destination3 from "../../assets/destination/image-europa.png";
import destination2 from "../../assets/destination/image-mars.png";
import destination1 from "../../assets/destination/image-moon.png";
import destination4 from "../../assets/destination/image-titan.png";

const Destination = () => {
  const [currentDestination, setCurrentDestination] = useState(destination1);
  return (
    <section className="destinationContainer ">
      <img
        src={mobileBg}
        alt="mobileBg"
        className="absolute inset-0 h-fit w-full select-none  mix-blend-overlay object-cover  object-center z-0 block md:hidden"
      />
      <h2 className="flex gap-5 mt-28 font-barlow z-30">
        <span className="text-neutral-400 font-extrabold ">01</span>PICK YOUR
        DESTINATION
      </h2>
      <img src={currentDestination} alt="moon" className="w-48 z-40 my-5" />
      <div className="flex gap-5 z-40">
        <NavLink
          to="/destination/"
          className="destinationLink"
          onClick={() => setCurrentDestination(destination1)}
        >
          Moon
        </NavLink>
        <NavLink
          to="/destination/mars"
          className="destinationLink"
          onClick={() => setCurrentDestination(destination2)}
        >
          Mars
        </NavLink>
        <NavLink
          to="/destination/Europa"
          className="destinationLink"
          onClick={() => setCurrentDestination(destination3)}
        >
          Europa
        </NavLink>
        <NavLink
          to="/destination/Titan"
          className="destinationLink"
          onClick={() => setCurrentDestination(destination4)}
        >
          Titan
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
};

export default Destination;
