import Image from "next/image";
import Text from "./Text";

function Hero() {
  return (
    <section className="flex justify-between gap-16 items-center px-8 m-auto">
      <Text
        name={"Noer Paanakker"}
        occupations={["Instructional Designer", "Frontend Engineer"]}
        bio={
          "Noer is a business-savvy educationalist with technical skills. He has spent the last 6 years helping underrepresented groups into high-quality tech jobs. You can often find him nerding out on cool ideas, in an effort to leave the world a better place than he found it."
        }
      />
      <div>
        <Image src="/images/noer_lrg.png" height={450} width={450} alt="Noer Profile" />
      </div>
    </section>
  );
}

export default Hero;
