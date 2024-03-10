"use client";

import Link from "next/link";

import { links } from "@/constants/data";

function NavLinks() {
  return (
    <div className="hidden lg:flex absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] p-1 items-center space-x-2 rounded-full backdrop-blur-md shadow-sm">
      {links.map((link, index) => (
        <Link key={index} href={link.hash} className="nav__link">
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;
