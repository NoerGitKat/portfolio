import { Hero } from "@/components/hero";
import { Transition } from "@/components/transition";

export default function Home() {
  return (
    <main className="flex flex-col items-center md:justify-center">
      <Transition>
        <Hero imageSrc="https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg" />
      </Transition>
    </main>
  );
}
