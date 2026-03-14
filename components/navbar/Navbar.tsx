"use client";

import React from "react";
import navItems from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTrackEvent } from "../../hooks/useTrackEvent";

type Props = {};

function Navbar({}: Props) {
  const pathname = usePathname();
  const { trackAndNavigate } = useTrackEvent();

  return (
    <nav className="hidden lg:flex justify-center absolute top-24">
      <ul className="flex gap-10 justify-end">
        {navItems.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            onClick={(e) =>
              trackAndNavigate(
                e as any,
                item.route,
                "button_clicked",
                `Navbar Navigation: ${item.text}`
              )
            }
          >
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
