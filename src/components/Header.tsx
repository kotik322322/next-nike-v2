"use client";

//Components
import Container from "./Container";
import Sidebar from "./Sidebar";
import Logo from "./Logo";

//NEXT
import Link from "next/link";
import HeaderLink from "./HeaderLink";
// import Image from "next/image";

//Images
import MobileNavigation from "./MobileNavigation";

export const navigationLinks = [
  {
    title: "Men",
    href: "/products/men",
  },
  {
    title: "Women",
    href: "/products/women",
  },
  {
    title: "Kids",
    href: "/products/kids",
  },
];

const Header = () => {
  return (
    <header className="w-full h-20 sticky top-0 right-0 left-0 bg-white shadow-sm z-20">
      <Container>
        <div className="flex items-center justify-between ">
          <Logo width={80} height={80} />

          <ul className="hidden md:flex items-center justify-center gap-x-4 capitalize text-md font-semibold ">
            {navigationLinks?.map((item, index) => (
              <li key={index}>
                <HeaderLink title={item?.title} href={item?.href} />
              </li>
            ))}
          </ul>

          <Sidebar />
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
