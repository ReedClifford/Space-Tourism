import { motion } from "framer-motion";
const Titan = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
      className=" mt-5 z-40"
    >
      <div className=" flex flex-col  justify-center border-b border-neutral-400 items-center lg:items-start ">
        <motion.h2
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="destinationHeader"
        >
          Titan
        </motion.h2>
        <div className="overflow-hidden">
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
            className="destinationDescription"
          >
            "The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </motion.p>
        </div>
      </div>
      <div className="destinationDetailContainer ">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="flex flex-col gap-1"
        >
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">1.6 BIL. KM</h3>
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="flex flex-col gap-1"
        >
          <h4 className="text-neutral-300 text-sm lg:text-start">
            EST. TRAVEL TIME
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">7 YEARS</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Titan;
