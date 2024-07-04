import Link from "next/link";

import { socials } from "@/constants/data";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          className="flex items-center justify-center w-16 h-16 bg-white border shadow-xl shadow-gray-500/10 rounded-full cursor-pointer"
        >
          <Image width={28} height={28} src={`icons/${social.icon}`} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
