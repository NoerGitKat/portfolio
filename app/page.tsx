import { Hero } from "@/components/hero";
import { Transition } from "@/components/transition";

export default function Home() {
  return (
    <main className="min-h-screen lg:ml-24 flex flex-col items-center justify-center">
      <Transition>
        {/* <Hero imageSrc="https://res.cloudinary.com/dndvdllpg/image/upload/v1692225767/portfolio/noer_lrg_dkg3x2.png" /> */}
        <Hero imageSrc="https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer_obhxlc.png" />
      </Transition>
    </main>
  );
}
