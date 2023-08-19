import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Sidebar } from "../components/sidebar";
import LoadingPage from "./loading";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noer's Personal Website",
  description:
    "Noer is a business-savvy educationalist with technical skills. He has spent the last 6 years helping underrepresented groups into high-quality tech jobs. You can often find him nerding out on cool ideas, in an effort to leave the world a better place than he found it."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${openSans.className}  text-zinc-800 `}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
