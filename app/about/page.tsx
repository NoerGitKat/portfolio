import { Testimonials } from "@/components/testimonials";
import { Transition } from "@/components/transition";
import { Introduction } from "@/components/about";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Transition>
        <Introduction />
        <Testimonials />
      </Transition>
    </main>
  );
}
