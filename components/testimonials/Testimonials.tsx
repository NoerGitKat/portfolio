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
    <aside className="flex h-full items-center justify-between border-2 p-8 text-left">
      <div>
        <Image
          className="rounded-full"
          width={150}
          height={150}
          src={image}
          alt={`${author} Profile`}
        />
      </div>
      <div className="max-w-xs max-h-sm">
        <p>{quote}</p>
        <h2 className="mt-4 font-bold text-xl text-right">{author}</h2>
        <h4 className="text-right italic">{title}</h4>
      </div>
    </aside>
  );
}

function Testimonials() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-2xl mb-4 font-bold">Wonderful people I&apos;ve worked with</h1>
      <Carousel
        autoPlay
        infiniteLoop
        emulateTouch
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        centerMode
        centerSlidePercentage={80}
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
    </section>
  );
}

export default Testimonials;
