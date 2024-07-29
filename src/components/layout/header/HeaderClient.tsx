"use client";

import { Routes } from "@/constants/enums";
import { getActiveListItem } from "@/utils/utils";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useEffect, useRef } from "react";

export default function HeaderClient() {
  const path = usePathname();
  return HeaderItems.map(({ href, title }) => (
    <li className="nav-item">
      <a
        className={`nav-link ${getActiveListItem(href, path) ? "active" : ""}`}
        aria-current="page"
        href={href}
      >
        {title}
      </a>
    </li>
  ));
}

export function HeaderClientWrapper({ children }: PropsWithChildren) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!headerRef.current) return;

      console.log(window.scrollY, headerRef.current.clientHeight);

      if (window.scrollY > headerRef.current.clientHeight) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="cmh-header" ref={headerRef}>
      {children}
    </header>
  );
}

const HeaderItems = [
  {
    title: "Home",
    href: Routes.Home,
  },
  {
    title: "Marketplace",
    href: Routes.Marketplace,
  },
  {
    title: "About Us",
    href: Routes.AboutUs,
  },
];
