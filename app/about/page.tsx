import { Testimonials } from "@/components/testimonials";
import { Transition } from "@/components/transition";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Transition>
        <Testimonials />
      </Transition>
    </main>
  );
}
