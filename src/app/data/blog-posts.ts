interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
}

// Newest first. Add an entry here whenever a new src/app/blog/<slug>/page.mdx is created.
export const blogPosts: BlogPost[] = [
  {
    title: "From Ubuntu to Arch to Mint: How I Finally Left Windows Behind",
    slug: "linux-mint-setup",
    description:
      "Ten years after a failed first try with Ubuntu, and two weeks of Arch thanks to a PewDiePie video, I switched to Linux Mint, erased Windows, and wrote the setup script that gets a fresh install back to how I like it.",
    date: "2026-08-29",
  },
  {
    title: "Turning GIMP Into My Photoshop, One Script at a Time",
    slug: "gimp-setup",
    description:
      "Why I built gimp-setup, a one-command installer that turns a fresh GIMP into a Photoshop-like editor with AI plug-ins baked in.",
    date: "2026-08-28",
  },
  {
    title: "Hello, World!",
    slug: "hello-world",
    description: "A quick welcome and what to expect from this blog.",
    date: "2026-08-27",
  },
];
