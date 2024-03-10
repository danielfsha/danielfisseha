import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

function ProjectCard() {
  const { scrollYProgress } = useScroll({
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const tags = ["tag one", "tag two"];

  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="flex flex-col space-y-2 rounded-[var(--border-radius)] transition-all"
    >
      <div className="block w-full h-[300px] rounded-[var(--border-radius)] overflow-hidden hero__texture"></div>

      <h1 className="heading pb-0 text-3xl text-left pt-4">Project Name</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
        dolores!
      </p>
      <div className="flex items-center space-x-2 space-y-2 flex-wrap">
        {tags.map((tag, index) => (
          <button key={index} className="btn">
            {tag}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
