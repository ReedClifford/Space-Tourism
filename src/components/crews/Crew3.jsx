import { motion } from "framer-motion";
const Crew3 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5 text-center flex flex-col items-center justify-center lg:justify-start lg:items-start"
      >
        <h3 className="crewTitle">PILOT</h3>
        <h2 className="crewName">VICTOR GLOVER</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="crewDescription"
        >
          Pilot on the first operational flight of the SpaceX Crew Dragon to the
          International Space Station. Glover is a commander in the U.S. Navy
          where he pilots an F/A-18.He was a crew member of Expedition 64, and
          served as a station systems flight engineer.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Crew3;
