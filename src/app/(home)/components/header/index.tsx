"use client";

import Icon from "@/app/components/icons";
import { useMenu } from "@/app/context/menu-context";
import { portfolio } from "@/app/data/portfolio";
import { codeSkills, designSkills, softSkills } from "@/app/data/skills";
import Link from "next/link";
import { MouseEvent, useEffect, useRef, useState } from "react";

export default function Header() {
  const { isMenuOpen, setIsMenuOpen } = useMenu();
  const textColor = isMenuOpen ? "text-zinc-500" : "";
  const [scrolled, setScrolled] = useState(new Set<string>());
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => headerRef.current?.classList.remove("opacity-0"), 200);

    let timer = 0;
    const portfolioTimeouts =
      window.innerHeight > 699 ? ["Portfolio-subtitle", "project-0"] : [];
    const timeouts = [
      "background-photo",
      "diego-chagas-subtitle",
      "front-end-title",
      "front-end-description",
      "curriculum-link",
      "portfolio-link",
      ...portfolioTimeouts,
    ].map((item) => {
      const element = document.getElementById(item);
      if (element) {
        timer += 200;
        return setTimeout(
          () => element.classList.add("animate-bounce-up"),
          timer
        );
      }
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    function buildScrollItems() {
      return [
        "Portfolio-subtitle",
        "Skills-subtitle",
        "Contact-subtitle",
        ...portfolio.map((_, index) => `project-${index}`),
        "skill-title-Code",
        "skill-title-Design",
        "skill-title-Personal",
        ...[...codeSkills, ...designSkills, ...softSkills].map((skill) =>
          skill.title.replaceAll(" ", "-")
        ),
      ];
    }

    function handleScrollBounceElements() {
      const items = buildScrollItems();
      items.forEach((item) => {
        const element = document.getElementById(item);
        if (element) {
          const offsetTop =
            element.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY + window.innerHeight > offsetTop + 100) {
            if (!scrolled.has(element.id)) {
              element.classList.add("animate-bounce-up");
              setScrolled((prev) => new Set(prev.add(element.id)));
            }
          }
        }
      });
    }

    function handleScrollBackgroundPhoto() {
      const maxScrollHeight = window.innerHeight - 300;
      const scrollPosition = window.scrollY;
      const backgroundPhoto = document.getElementById("background-photo");
      if (backgroundPhoto && scrolled.size) {
        backgroundPhoto.style.opacity =
          "" + Math.max(1 - scrollPosition / maxScrollHeight, 0);
      }
    }

    function onHandleScroll() {
      handleScrollBackgroundPhoto();
      handleScrollBounceElements();
    }

    window.addEventListener("scroll", onHandleScroll);

    return () => {
      window.removeEventListener("scroll", onHandleScroll);
    };
  }, [scrolled]);

  return (
    <header
      ref={headerRef}
      className={`fixed ${
        !isMenuOpen ? "bg-white/95" : ""
      } transition-colors z-40 w-full flex justify-between items-center py-5 md:py-8 px-3.5 md:px-8 xl:px-10`}
    >
      <Link
        href="/"
        className={`relative z-40 flex items-center transition-colors duration-200 ease-linear ${textColor} active:text-zinc-500`}
      >
        <Icon
          className="relative z-40 hidden 3xs:flex"
          name="code"
          isMenuOpen={isMenuOpen}
        />
        <div
          className="ml-1 2xs:ml-3"
          onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <h4 className="font-black text-2xl flex items-center leading-8">
            Diego Chagas
          </h4>
          <h6 className="text-2xs uppercase font-bold tracking-[0.25em] leading-none whitespace-nowrap">
            Front-End Developer
          </h6>
        </div>
      </Link>
      <button
        type="button"
        className="relative z-40 flex items-center transition-all duration-200"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span
          className={`hidden 2xs:block mr-2 2xs:mr-4 uppercase font-bold text-xs md:text-sm transition-colors duration-200 ease-linear ${textColor} tracking-[0.2em]`}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </span>
        <b className="relative block w-6 h-6">
          <Icon name={isMenuOpen ? "close" : "menu"} isMenuOpen={isMenuOpen} />
        </b>
      </button>
    </header>
  );
}
