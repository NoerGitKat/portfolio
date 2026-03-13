import { Testimonials } from "@/components/testimonials";
import { Transition } from "@/components/transition";
import Biography from "@/components/about/Biography";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between max-w-6xl m-10 md:m-auto">
      <Transition>
        <h1>Under construction 🙈</h1>
        {/* <Testimonials />
        <Biography /> */}
      </Transition>
    </main>
  );
}
