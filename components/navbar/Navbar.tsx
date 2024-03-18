"use client";

import React from "react";
import navItems from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex justify-center absolute top-24">
      <ul className="flex gap-10 justify-end">
        {navItems.map((item) => (
          <Link key={item.route} href={item.route}>
            <p className={`text-xl ${pathname === item.route ? "border-b-2 border-zinc-800" : ""}`}>
              {item.text}
            </p>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
