import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import desktopBg from "../../assets/technology/background-technology-desktop.jpg";
import mobileBg from "../../assets/technology/background-technology-mobile.jpg";
import tabletBg from "../../assets/technology/background-technology-tablet.jpg";
import tech1 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import lgTech1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import tech3 from "../../assets/technology/image-space-capsule-landscape.jpg";
import lgTech3 from "../../assets/technology/image-space-capsule-portrait.jpg";
import tech2 from "../../assets/technology/image-spaceport-landscape.jpg";
import lgTech2 from "../../assets/technology/image-spaceport-portrait.jpg";

const TechnologyPage = () => {
  const [techMobileImg, setTechMobileImg] = useState(tech1);
  const [desktopImg, setDesktopImg] = useState(lgTech1);
  return (
    <section
      className="min-h-screen  w-full flex bg-gradient-to-b from-neutral-500 to-slate-800 
  flex-col justify-center text-center items-center"
    >
      <img
        src={mobileBg}
        alt="mobileBg"
        className="absolute inset-0 h-full w-full select-none  mix-blend-overlay object-cover  
        object-center z-0 block md:hidden lg:hidden"
      />
      <img
        src={tabletBg}
        alt="mobileBg"
        className="absolute inset-0 h-fit w-full select-none  mix-blend-overlay object-cover  
        object-center z-0 hidden md:block lg:hidden"
      />
      <img
        src={desktopBg}
        alt="mobileBg"
        className="absolute inset-0 h-full w-full select-none  mix-blend-overlay object-cover 
         object-center z-0 hidden md:hidden lg:block"
      />

      <div className="text-center md:w-full md:pl-10 md:pt-5 lg:absolute lg:w-fit lg:left-8 lg:top-5 ">
        <h2 className="pageHeader">
          <span className="pageHeaderSpan">03</span>SPACE LAUNCH 101
        </h2>
      </div>
      <div className="z-40 flex flex-col lg:flex-row-reverse">
        <div className="z-40 ">
          <div className="z-40 mt-5 block lg:hidden">
            <img
              src={techMobileImg}
              alt="img"
              className="object-cover object-center"
            />
          </div>
          <div className="z-40 mt-5 hidden lg:block lg:absolute lg:right-0 lg:bottom-0">
            <img
              src={desktopImg}
              alt="img"
              className="object-cover object-center z-40"
            />
          </div>
        </div>
        <div className="flex flex-col z-40 justify-center items-center lg:flex-row lg:absolute lg:left-20 lg:bottom-32  ">
          <div>
            <div className="flex justify-center items-center gap-5 z-40 my-8 lg:flex-col ">
              <Link to="/technology/">
                <button
                  className="techLinkBtn"
                  onClick={() => {
                    setTechMobileImg(tech1);
                    setDesktopImg(lgTech1);
                  }}
                >
                  1
                </button>
              </Link>
              <Link to="/technology/2">
                <button
                  className="techLinkBtn"
                  onClick={() => {
                    setTechMobileImg(tech2);
                    setDesktopImg(lgTech2);
                  }}
                >
                  2
                </button>
              </Link>
              <Link to="/technology/3">
                <button
                  className="techLinkBtn"
                  onClick={() => {
                    setTechMobileImg(tech3);
                    setDesktopImg(lgTech3);
                  }}
                >
                  3
                </button>
              </Link>
            </div>
          </div>
          <div className="z-40">
            <h3 className="font-bellefair text-base text-neutral-400 z-40 lg:text-start lg:ml-5">
              THE TERMINOLOGY...
            </h3>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
