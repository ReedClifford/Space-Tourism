import { motion } from "framer-motion";
const Tech2 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5"
      >
        <h2 className="techTitle">SPACEPORT</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="techDescription "
        >
          A spaceport or cosmodrome is a site for launching (or receiving)
          spacecraft, by analogy to the seaport for ships or airport for
          aircraft. Based in the famous Cape Canaveral, our spaceport is ideally
          situated to take advantage of the Earth’s rotation for launch.
        </motion.p>
      </motion.div>
    </div>
  );
};
export default Tech2;
