import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import navItems from "./data";

function Sidebar() {
  return (
    <section className="absolute left-0 h-full w-24 shadow-2xl bg-white border-r-2 border-{#ceddfc}">
      <Link href="/">
        <NavItem
          className="bg-slate-500 py-2 hover:bg-slate-500"
          icon={
            <Image
              className="rounded-full bg-slate-300"
              height={50}
              width={50}
              src="https://res.cloudinary.com/dndvdllpg/image/upload/v1692225866/portfolio/noer_obhxlc.png"
              alt="Noer Profile"
            />
          }
        />
      </Link>
      <ul className="flex flex-col">
        {navItems.map((item) => (
          <Link key={item.route} href={item.route}>
            <NavItem icon={item.icon} text={item.text} />
          </Link>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
