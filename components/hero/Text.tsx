"use client";

import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

interface TextProps {
  name: string;
  occupations: string[];
  bio: string;
}

function Text({ name, occupations, bio }: TextProps) {
  return (
    <section className="flex flex-col max-w-lg">
      <sub className="text-lg italic">Well, hello there...</sub>
      <h1 className="text-8xl font-bold mt-2">{name}</h1>
      <h3 className="text-xl font-bold mt-2">
        I am a passionate{" "}
        <span className="text-blue-600">
          <Typewriter words={occupations} loop={false} />
        </span>
      </h3>
      <p className="mt-4">{bio}</p>
      <aside className="flex gap-4 mt-4 font-bold">
        <Link href="/portfolio">
          <button className="py-2 px-4 text-white bg-[#044389] shadow-lg transition hover:scale-110">
            My work
          </button>
        </Link>
        <button className="py-2 px-4 border-2 border-[#044389] shadow-lg transition hover:scale-110">
          Hire me
        </button>
      </aside>
      <aside className="mt-4">
        <button
          className="flex  hover:underline"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1EUOuiKaHL_KK9EsToWOHLkXW7TF_qCNE/view?usp=sharing",
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
    </section>
  );
}

export default Text;
