import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "New Zealand Certificate in English Language - Abacus Institute Of Studies",
  description:
    "Diego Chagas' NZCEL Level 2 certificate of attendance from Abacus Institute of Studies, an NZQA approved Category 1 institution in Christchurch, New Zealand.",
  icons: { shortcut: "/abacus/favicon.ico" },
};

export default function AbacusLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
