import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { Transition } from "@/components/transition";

export const metadata: Metadata = {
  title: "Noer's Personal Website",
  description:
    "An experienced instructional designer and learning consultant, with a background in software engineering. Passionate about helping others get the most out of their learning using technology and qual/quant research. MBA Leadership & Management, MSc Educational Science & Technology.",
  keywords: [
    "noer paanakker",
    "instructional designer",
    "learning consultant",
    "frontend engineer",
    "software engineer",
    "educational science",
    "portfolio",
    "noer's portfolio"
  ],
  openGraph: {
    url: "https://noerpaanakker.com",
    type: "website",
    title: "Noer's Personal Website",
    description:
      "An experienced instructional designer and learning consultant, with a background in software engineering. Passionate about helping others get the most out of their learning using technology and qual/quant research. MBA Leadership & Management, MSc Educational Science & Technology.",
    images: [
      {
        url: "https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg",
        width: 1200,
        height: 630,
        alt: "noerpaanakker"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Noer's Personal Website",
    description:
      "An experienced instructional designer and learning consultant, with a background in software engineering. Passionate about helping others get the most out of their learning using technology and qual/quant research. MBA Leadership & Management, MSc Educational Science & Technology.",
    creator: "noerpaanakker",
    site: "noerpaanakker",
    images: [
      {
        url: "https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg",
        width: 1200,
        height: 630,
        alt: "noerpaanakker"
      }
    ]
  },
  alternates: {
    canonical: "https://noerpaanakker.com"
  }
};

export default function Home() {
  return (
    <main className="flex flex-col items-center md:justify-center m-10">
      <Transition>
        <Hero imageSrc="https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg" />
      </Transition>
    </main>
  );
}
