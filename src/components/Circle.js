import { motion } from "framer-motion";

import "./Circle.css";

export default function Circle() {
  // const x = useMotionValue(0);
  // const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);

  return (
    <motion.div
      className="circle"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.7 }}
    />
  );
}
