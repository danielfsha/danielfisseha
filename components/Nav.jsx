import Image from "next/image";
import Link from "next/link";

import NavLinks from "@/components/NavLinks";

const nav = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-10">
      <nav className="wrapper relative flex items-center justify-between py-6">
        <div>
          <Image
            src="icons/logo.svg"
            alt="Daniel Fisseha Logo"
            className="dark:invert"
            width={42}
            height={24}
            priority
          />
        </div>

        <NavLinks />

        <Link href="#contact">
          <Link
            target="_blank"
            href="mailto:developedbydanielfisseha@gmail.com"
            className="btn btn__primary"
          >
            contact me
          </Link>
        </Link>
      </nav>
    </div>
  );
};

export default nav;
