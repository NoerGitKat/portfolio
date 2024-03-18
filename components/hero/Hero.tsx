"use client";

import Image from "next/image";
import Text from "./Text";
import { useState } from "react";

function Hero({ imageSrc }: { imageSrc: string }) {
  const [isMousedOver, setIsMousedOver] = useState(false);

  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between gap-4 xl:gap-40 items-center lg:m-auto m-10">
      <Text
        name={"Noer Paanakker"}
        occupations={["Educational Technologist", "Learning Consultant", "Instructional Designer"]}
        bio={"I design enriching learning experiences that develop future ready professionals."}
      />

      <div
        onMouseOver={() => setIsMousedOver(true)}
        onMouseLeave={() => setIsMousedOver(false)}
        className="flex items-center justify-center relative w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] bg-zinc-800 rounded-full overflow-hidden shadow-xl before:content-[''] before:absolute before:inset-y-[-10px] before:inset-x-[100px] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:animate-spin-slow before:transition-all before:duration-500 hover:before:inset-x-0 after:content-[''] after:absolute after:inset-[6px] after:bg-[#203976] after:rounded-full transition-all ease-in hover:scale-105"
      >
        <Image
          className={`rounded-full w-[14rem] h-[14rem] md:w-[24rem] md:h-[24rem] absolute z-20 bg-[#C3CBDC] transition-all ${
            isMousedOver ? "blur-sm" : ""
          }`}
          src={imageSrc}
          width={375}
          height={375}
          alt="Noer Profile"
        />
        <aside
          onClick={(e) => {
            window.location.href = "mailto:noer@lightworksweb.nl";
          }}
          className="absolute z-20 w-[96%] h-[96%] rounded-full flex flex-col items-center justify-center transition-all duration-500 opacity-0 hover:cursor-pointer hover:opacity-100"
        >
          <button className="rounded-md text-white font-semibold text-xl md:text-2xl lg:text-3xl h-3/6 lg:w-7/12 transition-all duration-300 hover:scale-125">
            Work with me
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
