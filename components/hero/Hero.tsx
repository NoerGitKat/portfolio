import Image from "next/image";
import Text from "./Text";

function Hero({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between gap-36 items-center lg:pl-8 m-auto mx-8">
      <Text
        name={"Noer Paanakker"}
        occupations={["Instructional Designer", "Frontend Engineer"]}
        bio={
          "I build delightful user experiences and design enriching learning experiences for positive social impact."
        }
      />
      <div>
        <Image src={imageSrc} height={450} width={450} alt="Noer Profile" />
      </div>
    </section>
  );
}

export default Hero;
