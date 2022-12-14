import { motion } from "framer-motion";
const Crew2 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5 text-center flex flex-col items-center justify-center lg:justify-start lg:items-start"
      >
        <h3 className="crewTitle">MISSION SPECIALIST</h3>
        <h2 className="crewName">MARK SHUTTLEWORTH</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="crewDescription"
        >
          Mark Richard Shuttleworth is the founder and CEO of Canonical, the
          company behind the Linux-based Ubuntu operating system. Shuttleworth
          became the first South African to travel to space as a space tourist.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Crew2;
