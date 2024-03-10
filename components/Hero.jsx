"use client";

import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="#hero"
      className="hero__texture flex flex-col items-center justify-center min-h-[85vh]"
    >
      <motion.div
        initial={{ y: "-50%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="heading">
          I craft digital masterpieces that leave a lasting impression
        </h1>
        <div className="flex space-x-3">
          <button className="btn">download cv</button>
          <button className="btn btn-dark">contact me</button>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
