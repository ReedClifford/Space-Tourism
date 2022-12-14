import { motion } from "framer-motion";
const Tech1 = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: "100%" }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="z-40 p-5"
      >
        <h2 className="techTitle">LAUNCH VEHICLE</h2>
        <motion.p
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 0.85, ease: "easeOut" }}
          className="techDescription"
        >
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </motion.p>
      </motion.div>
    </div>
  );
};
export default Tech1;
