interface BlogPost {
  title: string;
  slug: string;
  description: string;
  date: string;
}

// Newest first. Add an entry here whenever a new src/app/blog/<slug>/page.mdx is created.
export const blogPosts: BlogPost[] = [
  {
    title: "Download Netflix Video and Audio by Hand With the Browser and ffmpeg",
    slug: "netflix-download-ffmpeg",
    description:
      "A manual method to save a Netflix episode: find the audio and video streams in the browser's network tab, download them, and merge them with subtitles using ffmpeg.",
    date: "2026-10-28",
  },
  {
    title: "Bitwarden Firefox Extension Not Loading Logins: Update Vaultwarden",
    slug: "vaultwarden-firefox-fix",
    description:
      "When the Bitwarden extension in Firefox stopped loading my logins, the fix was updating my self-hosted Vaultwarden container to the latest image.",
    date: "2026-10-24",
  },
  {
    title: "Dell P2719H Monitor Setup: Stand, Cables and Pivot, Step by Step",
    slug: "dell-monitor-setup",
    description:
      "The quick setup guide of the Dell P2719H (my box says P2719HE) split into steps: attach the stand, connect HDMI, DisplayPort, USB and power, and how to tilt and rotate it safely.",
    date: "2026-10-19",
  },
  {
    title: "How to Assemble the Mesa Office 51015 Monitor Desk, Step by Step",
    slug: "office-desk-assembly",
    description:
      "The Mesa Office 51015 comes with one page of drawings. Here is the assembly split into five steps, each with its own image and a plain explanation.",
    date: "2026-10-13",
  },
  {
    title: "How to Assemble the Pichau Donek Gaming Chair, Step by Step",
    slug: "gaming-chair-assembly",
    description:
      "The paper manual of the Pichau Donek gaming chair is one dense sheet of drawings. Here it is split into six steps, one image and one explanation each.",
    date: "2026-10-08",
  },
  {
    title: "I Tried to Replace Claude With Free AI Models",
    slug: "free-ai-models",
    description:
      "The free, open AI models I run on my own laptop, what they do well in my projects, and why Mini AI and a local agent still couldn't replace Claude for me.",
    date: "2026-09-25",
  },
  {
    title: "3D&T Made Me a Reader, a Coder, and Got Me Actual Friends",
    slug: "character-sheet-3det",
    description:
      "3D&T was my first RPG as a teenager, and it changed how I read, socialized, and thought about systems. Years later, learning to code, the first real project I wanted to build was a character sheet for it.",
    date: "2026-08-30",
  },
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
