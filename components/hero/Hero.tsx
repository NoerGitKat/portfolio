import Image from "next/image";
import Text from "./Text";

function Hero({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between gap-4 xl:gap-36 items-center lg:pl-8 md:m-auto mx-8">
      <Text
        name={"Noer Paanakker"}
        occupations={["Instructional Designer", "Frontend Engineer", "Product Manager"]}
        bio={
          "I build delightful user experiences and design enriching learning experiences for positive social impact."
        }
      />

      <div className="flex items-center justify-center relative w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] bg-zinc-800 rounded-full overflow-hidden shadow-xl before:content-[''] before:absolute before:inset-y-[-10px] before:inset-x-[100px] before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 before:animate-spin-slow before:transition-all before:duration-500 hover:before:inset-x-0 after:content-[''] after:absolute after:inset-[6px] after:bg-[#203976] after:rounded-full">
        <Image
          className="rounded-full w-[14rem] h-[14rem] md:w-[24rem] md:h-[24rem] absolute z-20 bg-[#C3CBDC]"
          src={imageSrc}
          width={375}
          height={375}
          alt="Noer Profile"
        />
        <aside className="absolute z-20 bg-[#C3CBDC] w-[95%] h-[95%] rounded-full flex flex-col items-center justify-center transition-all duration-500 opacity-0 hover:opacity-100">
          <button className="rounded-md bg-[#173A7B] text-white font-bold text-xl p-2 transition-all duration-300 hover:scale-125">
            Hire me
          </button>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
