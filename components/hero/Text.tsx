"use client";

import { Typewriter } from "react-simple-typewriter";

interface TextProps {
  name: string;
  occupations: string[];
  bio: string;
}

function Text({ name, occupations, bio }: TextProps) {
  return (
    <section className="flex flex-col max-w-lg">
      <sub className="text-sm italic">Hello there...</sub>
      <h1 className="text-3xl font-bold mt-4">{name}</h1>
      <h3>
        I am a passionate{" "}
        <span className="font-bold bg-slate-600 text-white">
          <Typewriter words={occupations} loop={false} />
        </span>
      </h3>
      <p className="mt-4">{bio}</p>
      <aside className="flex gap-4 mt-4 font-bold">
        <button className="py-2 px-4 bg-slate-400 rounded-full">My work</button>
        <button className="py-2 px-4 border-2 border-slate-400 rounded-full">Hire me</button>
      </aside>
    </section>
  );
}

export default Text;
