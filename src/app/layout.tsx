import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.diegochagas.com"),
  title: {
    default: "Diego Chagas | Senior React & Next.js Developer",
    template: "%s | Diego Chagas",
  },
  description:
    "Senior React & Next.js developer with 9+ years of experience building web apps for Prudential, Petrobras, Shell, Carrefour and Nestlé. Open to freelance, contract and remote roles.",
  keywords: [
    "Diego Chagas",
    "React developer",
    "Next.js developer",
    "front-end developer",
    "freelance developer",
    "hire React developer",
    "TypeScript developer",
    "remote developer",
    "web developer Brazil",
  ],
  authors: [{ name: "Diego Chagas", url: "https://www.diegochagas.com" }],
  creator: "Diego Chagas",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.diegochagas.com",
    siteName: "Diego Chagas — Portfolio",
    title: "Diego Chagas | Senior React & Next.js Developer",
    description:
      "Senior React & Next.js developer with 9+ years of experience. Open to freelance, contract and remote roles.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@diegorchagas",
    creator: "@diegorchagas",
    title: "Diego Chagas | Senior React & Next.js Developer",
    description:
      "Senior React & Next.js developer with 9+ years of experience. Open to freelance, contract and remote roles.",
  },
  verification: {
    google: "MUF7DGGJNQ_QKJ_Fxyi8KaESXPy88_6ePXsz24CftFA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Chagas",
  alternateName: "Diego Rocha Chagas",
  url: "https://www.diegochagas.com",
  email: "mailto:drochachagas@gmail.com",
  jobTitle: "Senior React/Next.js Developer",
  description:
    "Senior front-end developer specializing in React, Next.js and TypeScript, working professionally since 2016.",
  nationality: "Brazilian",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  sameAs: [
    "https://www.linkedin.com/in/diegorchagas",
    "https://github.com/diegochagas",
    "https://www.instagram.com/diegorchagas",
    "https://x.com/diegorchagas",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Angular",
    "SQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-900 text-base`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
