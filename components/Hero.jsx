"use client";

import { motion } from "framer-motion";

import Socials from "@/components/Socials";
import Link from "next/link";

function Hero() {
  return (
    <section
      id="#hero"
      className="flex flex-col items-center justify-center h-screen"
    >
      <motion.div
        initial={{ y: "-50%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
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
      </motion.div>
    </section>
  );
}

export default Hero;
