import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { CopyrightYear } from "./copyright-year";
import Icon from "@/app/components/icons";

const title = "Blog";
const fullTitle = "Blog | Diego Chagas";
const description =
  "Diego Chagas' personal blog — notes on React, Next.js, Linux tooling and whatever else I'm building at the moment.";

export const metadata: Metadata = {
  title: { default: title, template: "%s | Diego Chagas" },
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://www.diegochagas.com/blog",
    siteName: "Diego Chagas — Blog",
    title: fullTitle,
    description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@diegorchagas",
    creator: "@diegorchagas",
    title: fullTitle,
    description,
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="w-full py-5 md:py-8 px-3.5 md:px-8 xl:px-10">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="relative z-40 flex items-center">
            <Icon className="hidden 3xs:flex" name="code" />
            <div className="ml-1 2xs:ml-3">
              <p className="font-black text-2xl flex items-center leading-8">
                Diego Chagas
              </p>
              <p className="text-2xs uppercase font-bold tracking-[0.25em] leading-none whitespace-nowrap">
                Front-End Developer
              </p>
            </div>
          </Link>
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 relative border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition-all duration-200 pb-0.5"
          >
            All posts
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-3.5 md:px-8 py-12 md:py-16">
        {children}
      </main>

      <footer className="max-w-2xl mx-auto px-3.5 md:px-8 py-10 mt-10 border-t border-zinc-100">
        <p className="text-zinc-500 text-sm">
          &copy; 2016 — <CopyrightYear /> Diego Chagas
        </p>
      </footer>
    </div>
  );
}
