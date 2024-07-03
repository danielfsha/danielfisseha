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
      className="flex flex-col space-x-0 p-4 bg-white border shadow-xl rounded-4xl shadow-gray-500/10 rounded-[var(--border-radius)] transition-all cursor-pointer lg:flex-row lg:space-y-2 lg:space-x-6"
    >
      {/* project image */}
      <div className="flex-1 min-h-[450px] bg-orange-600 rounded-[var(--border-radius)] overflow-hidden hero__texture"></div>

      {/* project details */}
      <div className="flex flex-1 flex-col justify-start items-start space-y-2">
        <h1 className="heading pb-0 text-3xl text-left pt-4">Project Name</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
          dolores!
        </p>
        <div className="flex items-center space-x-2 flex-wrap">
          {tags.map((tag, index) => (
            <button key={index} className="btn">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
