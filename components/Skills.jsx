"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/constants/data";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * index,
      duration: 0.05,
    },
  }),
};

function Skills() {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-[50px] lg:p-[var(--vertical-section-offset)] lg:px-[300px] text-xl">
      {skillsData.map((skill, index) => (
        <motion.span
          key={index}
          className="btn"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          custom={index}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}

export default Skills;
