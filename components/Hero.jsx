"use client";

import Socials from "@/components/Socials";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="#hero"
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="flex flex-col items-center justify-center">
        <Socials />
        <h1 className="heading">
          I craft digital masterpieces that leave a lasting impression
        </h1>
        <div className="flex space-x-1">
          <Link
            href="/files/cv.pdf"
            target="_blank"
            locale={false}
            className="btn"
          >
            download cv
          </Link>
          <Link
            target="_blank"
            href="mailto:developedbydanielfisseha@gmail.com"
            className="btn btn__primary"
          >
            contact me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
