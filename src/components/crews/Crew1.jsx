import { motion } from "framer-motion";
const Crew1 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5 text-center flex flex-col items-center justify-center 
    lg:items-start  "
      >
        <h3 className="crewTitle">COMMANDER</h3>
        <h2 className="crewName">DOUGLASS HURLEY</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="crewDescription "
        >
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Crew1;
