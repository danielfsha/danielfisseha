"use client";

import { skillsData } from "@/constants/data";

function Skills() {
  return (
    <div
      id="#skills"
      className="flex flex-wrap justify-center gap-1 py-[10vh] pt-[20vh] lg:p-[var(--vertical-section-offset)] lg:px-[300px] text-xl"
    >
      {skillsData.map((skill, index) => (
        <span key={index} className="btn">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default Skills;
