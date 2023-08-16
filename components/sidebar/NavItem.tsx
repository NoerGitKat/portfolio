import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavItemProps {
  icon?: ReactNode;
  text?: string;
  className?: string;
}

function NavItem({ icon, text, className }: NavItemProps) {
  return (
    <li
      className={twMerge(
        "flex flex-col items-center text-xs py-4 border-b-2 border-slate-50 hover:cursor-pointer hover:bg-slate-300",
        className
      )}
    >
      {icon && icon}
      {text && <p className="mt-2">{text.toUpperCase()}</p>}
    </li>
  );
}

export default NavItem;
