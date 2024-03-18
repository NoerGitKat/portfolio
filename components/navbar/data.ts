interface NavbarItem {
  text: string;
  route: string;
}

const navItems: NavbarItem[] = [
  {
    text: "Home",
    route: "/"
  },
  {
    text: "About Me",
    route: "/about"
  },
  {
    text: "Portfolio",
    route: "/portfolio"
  }
];

export default navItems;
