import "./globals.css";
import type { Viewport } from "next/dist/lib/metadata/types/extra-types";
import type { Metadata } from "next/types";
import { Open_Sans } from "next/font/google";
import { Sidebar } from "../components/sidebar";
import { Navbar } from "@/components/navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  title: "Noer's Personal Website",
  description:
    "An experienced instructional designer and learning consultant, with a background in software engineering. Passionate about helping others get the most out of their learning using technology and qual/quant research. MBA Leadership & Management, MSc Educational Science & Technology.",
  metadataBase: new URL("https://noerpaanakker.com"),
  openGraph: {
    siteName: "Noer's Personal Website",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  alternates: {
    types: {
      "application/rss+xml": "https://noerpaanakker.com/rss.xml"
    }
  },
  applicationName: "Noer's Personal Website",
  appleWebApp: {
    title: "Noer's Personal Website",
    statusBarStyle: "default",
    capable: true
  },
  verification: {
    google: "YOUR_DATA",
    yandex: ["YOUR_DATA"],
    other: {
      "msvalidate.01": ["YOUR_DATA"],
      "facebook-domain-verification": ["YOUR_DATA"]
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png"
      }
    ]
  }
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
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Noer's Portfolio Website",
            url: "https://noerpaanakker.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://noerpaanakker.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            },
            headline: "Noer's Portfolio Website",
            image:
              "https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer-upscaled.jpg",
            author: {
              "@type": "Person",
              name: "Noer Paanakker",
              url: "https://www.linkedin.com/in/noerpaanakker/"
            },
            datePublished: "2024-03-19",
            dateModified: "2024-03-19"
          })}
        </script>
      </body>
    </html>
  );
}
