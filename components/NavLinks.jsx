"use client";

import { links } from "@/constants/data";

function NavLinks() {
  const scrollSectionIntoView = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden lg:flex p-1 items-center absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]  space-x-2 rounded-full backdrop-blur-md shadow-lg border shadow-gray-500/10">
      {links.map((link, index) => (
        <a
          onClick={() => scrollSectionIntoView(link.hash)}
          key={index}
          href={link.hash}
          className="nav__link"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
