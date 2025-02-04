import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | Diego Chagas - Senior React/Next.js Developer",
  description:
    "Diego Chagas' personal blog - a space where I share whatever I'm into at the moment, whether it's coding, books, movies, series, or anything else that catches my interest.",
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
