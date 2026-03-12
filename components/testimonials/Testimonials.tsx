"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import testimonials from "./data";

function Testimonials() {
  return (
    <section className="my-6">
      {/* <h1 className="text-3xl mb-4 font-bold">Wonderful people I&apos;ve worked with</h1> */}
      <aside className="max-w-md md:max-w-3xl m-auto">
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true
          }}
          pagination={{
            clickable: true
          }}
          loop
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map(({ image, author, quote, title }) => (
            <SwiperSlide key={author}>
              <div className="flex flex-col items-center md:items-start md:flex-row h-full justify-between md:text-left">
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </aside>
    </section>
  );
}

export default Testimonials;
