"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  scrollTo: (section: string) => void;
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  scrollTo: () => {},
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function scrollTo(section: string) {
    const element = document.getElementById(section);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, scrollTo }}>
      {children}
    </MenuContext.Provider>
  );
}

export const useMenu = () => useContext(MenuContext);
