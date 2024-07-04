import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

function ProjectCard({ link, bannerImg, name, description, tags }) {
  const { scrollYProgress } = useScroll({
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <Link
        href={link}
        className="flex flex-col space-x-0 p-2 bg-white border shadow-xl shadow-gray-500/10 rounded-[var(--border-radius)] transition-all cursor-pointer lg:flex-row lg:space-y-4 lg:space-x-6"
      >
        {/* project image */}
        <div
          className="flex-1 min-h-[450px] bg-orange-600 rounded-[20px] rounded- overflow-hidden"
          style={{
            background: `url(projects/${bannerImg}) center center/cover`,
          }}
        ></div>

        {/* project details */}
        <div className="flex flex-1 flex-col justify-start items-start space-y-6">
          <h1 className="text-lg font-medium text-black lg:text-5xl">{name}</h1>
          <p className="text-sm text-gray-500">{description}</p>
          <div className="flex items-center space-x-2 flex-wrap">
            {tags.map((tag, index) => (
              <button key={index} className="btn">
                {tag}
              </button>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
