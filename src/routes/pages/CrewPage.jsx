import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import desktopBg from "../../assets/crew/background-crew-desktop.jpg";
import mobileBg from "../../assets/crew/background-crew-mobile.jpg";
import tabletBg from "../../assets/crew/background-crew-tablet.jpg";
import crew4 from "../../assets/crew/image-anousheh-ansari.png";
import crew1 from "../../assets/crew/image-douglas-hurley.png";
import crew2 from "../../assets/crew/image-mark-shuttleworth.png";
import crew3 from "../../assets/crew/image-victor-glover.png";
const CrewPage = () => {
  const [currentCrew, setCurrentCrew] = useState(crew1);
  const size = () => {
    return currentCrew === crew3 ? "lg:w-96" : "lg:w-128";
  };
  return (
    <section className="crewPageContainer">
      <img
        src={mobileBg}
        alt="mobilebg"
        className="absolute inset-0 h-full w-full select-none  mix-blend-overlay object-cover 
         object-center z-0 block md:hidden"
      />
      <img
        src={tabletBg}
        alt="tablet"
        className="absolute top-0 right-0 h-full w-full select-none  mix-blend-overlay  object-cover object-center
         z-0 hidden md:block"
      />
      <img
        src={desktopBg}
        alt="tablet"
        className="absolute top-0 right-0 h-full w-full select-none  mix-blend-multilply  object-cover object-center
         z-0 hidden lg:block"
      />
      <div className="text-center md:w-full md:pl-10 md:pt-5 lg:absolute lg:w-fit lg:left-8 lg:top-5">
        <h2 className="pageHeader">
          <span className="pageHeaderSpan">02</span>MEET YOUR CREW
        </h2>
      </div>

      <div
        className="flex flex-col justify-between   items-center   md:flex-col-reverse  
      lg:items-start lg:container lg:mx-auto"
      >
        <div className="border-b border-slate-700 z-10  mt-10 lg:absolute lg:right-5 lg:bottom-0">
          <img
            src={currentCrew}
            alt="crew1"
            className={`w-40 md:w-96 ${size}`}
          />
        </div>
        <div className="z-40 flex justify-evenly gap-5 items-center mt-5 lg:justify-start lg:w-full lg:ml-10">
          <NavLink to="/crew/" onClick={() => setCurrentCrew(crew1)}>
            <button className="crewLinkBtn"></button>
          </NavLink>
          <NavLink to="/crew/crew2" onClick={() => setCurrentCrew(crew2)}>
            <button className="crewLinkBtn"></button>
          </NavLink>
          <NavLink to="/crew/crew3" onClick={() => setCurrentCrew(crew3)}>
            <button className="crewLinkBtn"></button>
          </NavLink>
          <NavLink to="/crew/crew4" onClick={() => setCurrentCrew(crew4)}>
            <button className="crewLinkBtn"></button>
          </NavLink>
        </div>

        <Outlet />
      </div>
    </section>
  );
};
export default CrewPage;
