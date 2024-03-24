"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface TextProps {
  name: string;
  occupations: string[];
  bio: string;
}

function Text({ name, occupations, bio }: TextProps) {
  return (
    <section className="flex flex-col max-w-lg">
      <sub className="md:text-lg text-sm italic">Well, hello there...</sub>
      <h1 className="md:text-8xl text-4xl font-bold mt-2 md:mt-0">{name}</h1>
      <h3 className="md:text-3xl text-xl font-bold  md:mt-2">
        <span className="text-[#1B4284]">
          <span className="opacity-0 ml-[-.7rem]">|</span>
          <Typewriter words={occupations} loop={false} />
        </span>
      </h3>
      <aside className="md:ml-[0.3rem]">
        <p className="mt-2 md:mt-4">{bio}</p>
        <aside className="flex gap-4 mt-4 font-bold">
          <Link href="/portfolio">
            <button className="rounded-md py-4 px-4 text-white bg-[#044389] shadow-lg transition hover:scale-110">
              My work
            </button>
          </Link>
          <button className="rounded-md py-2 px-4 border-2 border-[#044389] shadow-lg transition hover:scale-110">
            <a href="mailto:noer@lightworksweb.nl">Work with me</a>
          </button>
        </aside>
        <aside className="mt-4">
          <button
            className="flex  hover:underline"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1c5o1aXpaYNJBtkjS7XHsJQuLspRFiP12/view?usp=sharing",
                "_blank",
                "noreferrer"
              )
            }
          >
            Download Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        </aside>
        <aside className="flex gap-2 mt-2">
          <a href="https://github.com/noergitkat" target="_blank" rel="noopener noreferrer">
            <FaGithub size="2em" className="transition-all hover:scale-110" />
          </a>
          <a href="https://linkedin.com/in/noerpaanakker" target="_blank" rel="noopener noreferrer">
            <CiLinkedin size="2em" className="transition-all hover:scale-110" />
          </a>
        </aside>
      </aside>
    </section>
  );
}

export default Text;
