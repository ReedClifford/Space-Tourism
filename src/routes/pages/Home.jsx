import { motion } from "framer-motion";
import desktopBg from "../../assets/home/background-home-desktop.jpg";
import mobileBg from "../../assets/home/background-home-mobile.jpg";
import tabletBg from "../../assets/home/background-home-tablet.jpg";

const Home = () => {
  return (
    <section className="home-container">
      <img src={mobileBg} alt="mobile" className="mobile-bg" />
      <img src={tabletBg} alt="mobile" className="tablet-bg" />
      <img src={desktopBg} alt="mobile" className="desktop-bg" />
      <div className="header-container">
        <div className="overflow-hidden">
          <motion.h3
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="subHeading"
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.h3>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="mainHeading "
          >
            SPACE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="homeParagraph"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </div>
      </div>
      <button className="exploreButton">EXPLORE</button>
    </section>
  );
};
export default Home;
