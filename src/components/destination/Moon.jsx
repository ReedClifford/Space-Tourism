import { motion } from "framer-motion";
const Moon = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
      className=" mt-5 z-40"
    >
      <div className="  flex flex-col  justify-center border-b border-neutral-400 items-center lg:items-start  ">
        <motion.h2
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="destinationHeader"
        >
          Moon
        </motion.h2>
        <div className="overflow-hidden">
          <motion.p
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="destinationDescription"
          >
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </motion.p>
        </div>
      </div>
      <div className="destinationDetailContainer overflow-hidden">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="flex flex-col gap-1"
        >
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">384,400 KM</h3>
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
          <h3 className="font-bellefair text-3xl lg:text-start">3 DAYS</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Moon;
