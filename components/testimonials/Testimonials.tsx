"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import testimonials from "./data";

function Testimonial({
  quote,
  author,
  title,
  image
}: {
  quote: string;
  author: string;
  title: string;
  image: string;
}) {
  return (
    <aside className="flex h-full items-center justify-between text-left mx-6">
      <div>
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src={image}
          alt={`${author} Profile`}
        />
      </div>
      <div className="max-w-lg my-4">
        <p className="italic">&quot;{quote}&quot;</p>
        <h2 className="mt-4 font-bold text-xl text-right">{author}</h2>
        <h4 className="text-right">{title}</h4>
      </div>
    </aside>
  );
}

function Testimonials() {
  return (
    <section className="my-6">
      <h1 className="text-3xl mb-4 font-bold">Wonderful people I&apos;ve worked with</h1>
      <aside className="max-w-3xl m-auto">
        <Carousel
          autoPlay
          infiniteLoop
          emulateTouch
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          centerMode
          centerSlidePercentage={80}
          className=""
        >
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.author}
              quote={testimonial.quote}
              author={testimonial.author}
              title={testimonial.title}
              image={testimonial.image}
            />
          ))}
        </Carousel>
      </aside>
    </section>
  );
}

export default Testimonials;
