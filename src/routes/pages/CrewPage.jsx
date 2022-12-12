import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import mobileBg from "../../assets/crew/background-crew-mobile.jpg";
import crew4 from "../../assets/crew/image-anousheh-ansari.png";
import crew1 from "../../assets/crew/image-douglas-hurley.png";
import crew2 from "../../assets/crew/image-mark-shuttleworth.webp";
import crew3 from "../../assets/crew/image-victor-glover.png";
const CrewPage = () => {
  const [currentCrew, setCurrentCrew] = useState(crew1);

  return (
    <section
      className="min-h-screen w-full flex bg-gradient-to-l from-neutral-500 to-slate-700 
    flex-col justify-center text-center items-center"
    >
      <img
        src={mobileBg}
        alt="mobilebg"
        className="absolute inset-0 h-full w-full select-none  mix-blend-overlay object-cover  object-center z-0 block md:hidden"
      />
      <h2 className="pageHeader">
        <span className="pageHeaderSpan">02</span>MEET YOUR CREW
      </h2>
      <div className="border-b border-slate-800 z-30 w-full mt-10">
        <img src={currentCrew} alt="crew1" className="w-40 mx-auto" />
      </div>
      <div className="z-40 flex justify-evenly gap-5 items-center mt-5">
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
    </section>
  );
};
export default CrewPage;
