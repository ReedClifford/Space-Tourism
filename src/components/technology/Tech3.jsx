import { motion } from "framer-motion";
const Tech3 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5"
      >
        <h2 className="techTitle">SPACE CAPSULE</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="techDescription"
        >
          A space capsule is an often-crewed spacecraft that uses a blunt-body
          reentry capsule to reenter the Earth's atmosphere without wings. Our
          capsule is where you'll spend your time during the flight. It includes
          a space gym, cinema, and plenty of other activities to keep you
          entertained.
        </motion.p>
      </motion.div>
    </div>
  );
};
export default Tech3;
