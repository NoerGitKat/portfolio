import { Hero } from "@/components/hero";
import { Transition } from "@/components/transition";

export default function Home() {
  return (
    <main className="min-h-screen lg:ml-24 flex flex-col items-center mt-8 md:mt-0 md:justify-center">
      <Transition>
        <Hero imageSrc="https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg" />
      </Transition>
    </main>
  );
}
