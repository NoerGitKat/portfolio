import Image from "next/image";

interface BiographyProps {}

function Biography(props: BiographyProps) {
  return (
    <section className="flex flex-col gap-4 md:flex-row justify-between">
      <aside className="">
        <h1 className="text-3xl font-bold my-2">About me</h1>
        <p className="text-md md:text-lg my-2">
          Noer is an experienced instructional designer and learning consultant, with a background in software engineering. He is passionate about helping others get the most out of their learning using technology and qual/quant research. In his free time he likes to read books, play around with code and travel the world.
        </p>
      </aside>
      <aside className="">
        <Image
          className="rounded-full"
          src={
            "https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg"
          }
          width={500}
          height={500}
          alt="Noer Profile"
        />
      </aside>
    </section>
  );
}

export default Biography;
