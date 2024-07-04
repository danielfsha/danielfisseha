"use client";

import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      id="#about"
      initial={{ y: "-50%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      viewport={{ once: true }}
      className="wrapper heading text-xl lg:text-4xl pb-0 py-[var(--vertical-section-offset)]"
    >
      hi I am daniel, a detail-oriented web developer and graphics designer with
      over 6+ years of expertise in the field. I have passion for creating
      beautiful and functional web experiance. I have worked on numerous
      projects ranging from simple frontend web apps all the way to web3 based
      complex Dapps. I am highly motivated and eager to learn new skills and
      always willing to go the extra mile needed for my projects completion.
    </motion.div>
  );
}

export default AboutMe;
