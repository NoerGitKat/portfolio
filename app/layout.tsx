import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "@/components/navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noer's Personal Website",
  description:
    "An experienced instructional designer and learning consultant, with a background in software engineering. Passionate about helping others get the most out of their learning using technology and qual/quant research. MBA, MSc Educational Science & Technology."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} text-zinc-800 lg:h-screen lg:flex lg:flex-col lg:justify-center lg:items-center`}
      >
        <aside className="pointer-events-none absolute inset-0 -z-40 h-full bg-[url('https://res.cloudinary.com/dndvdllpg/image/upload/v1710751044/portfolio/noise_texture.jpg')] opacity-20 mix-blend-soft-light"></aside>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
