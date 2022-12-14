import { motion } from "framer-motion";
const Mars = () => {
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
          Mars
        </motion.h2>
        <div className="overflow-hidden">
          <motion.p
            animate={{ y: 0 }}
            initial={{ y: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="destinationDescription "
          >
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </motion.p>
        </div>
      </div>
      <div className="destinationDetailContainer overflow-hidden ">
        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.75, ease: "easeOut" }}
          className="flex flex-col gap-1"
        >
          <h4 className="text-neutral-300 text-sm lg:text-start">
            AVG. DISTANCE
          </h4>
          <h3 className="font-bellefair text-3xl lg:text-start">225 MIL. KM</h3>
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
          <h3 className="font-bellefair text-3xl lg:text-start">9 MONTHS</h3>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Mars;
