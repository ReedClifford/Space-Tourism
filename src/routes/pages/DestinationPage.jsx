import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import desktopBg from "../../assets/destination/background-destination-desktop.jpg";
import mobileBg from "../../assets/destination/background-destination-mobile.jpg";
import tabletBg from "../../assets/destination/background-destination-tablet.jpg";
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
        className="absolute inset-0 h-fit w-full select-none  mix-blend-overlay object-cover 
         object-center z-0 block md:hidden lg:hidden"
      />
      <img
        src={tabletBg}
        alt="mobileBg"
        className="absolute inset-0 h-max w-full select-none  mix-blend-overlay object-cover 
         object-center z-0 hidden md:block lg:hidden"
      />
      <img
        src={desktopBg}
        alt="mobileBg"
        className="absolute inset-0 h-full w-full select-none  mix-blend-overlay object-cover 
         object-center z-0 hidden md:hidden lg:block"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="z-40 flex flex-col items-center">
          <div className="text-center md:w-full md:pl-10 md:pt-5 lg:ml-36">
            <h2 className="pageHeader">
              <span className="pageHeaderSpan ">01</span>PICK YOUR DESTINATION
            </h2>
          </div>

          <motion.img
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
            src={currentDestination}
            alt="moon"
            className="w-48 z-40 my-5 md:w-72 md:my-20 lg:w-80"
          />
        </div>
        <div className="z-40 lg:mt-32">
          <div className="flex items-center justify-center gap-5 z-40 lg:justify-start">
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
        </div>
      </div>
    </section>
  );
};

export default Destination;
