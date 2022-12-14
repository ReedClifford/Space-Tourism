import { motion } from "framer-motion";

const Crew4 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5 text-center flex flex-col items-center justify-center lg:justify-start lg:items-start"
      >
        <h3 className="crewTitle">FLIGHT ENGINEER</h3>
        <h2 className="crewName">ANOUSHEH ANSARI</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="crewDescription"
        >
          Anousheh Ansari is an Iranian American engineer and co-founder of
          Prodea Systems. Ansari was the fourth self-funded space tourist, the
          first self-funded woman to fly to the ISS, and the first Iranian in
          space.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Crew4;
