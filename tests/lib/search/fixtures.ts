import type { SearchIndexEntry } from "@/lib/search/search-types";

export const NETFLIX_MDX = `import { PostDate } from "../post-date";
import { ArticleJsonLd } from "../article-json-ld";

export const title = "Download Netflix Video With ffmpeg";
export const description =
  "A manual method to save an episode.";
export const slug = "netflix-download-ffmpeg";
export const date = "2026-10-28";

export const metadata = {
  title,
  description,
  keywords: ["Netflix", "ffmpeg", 'browser devtools'],
  alternates: { canonical: \`/blog/\${slug}\` },
};

<ArticleJsonLd
  title={title}
  slug={slug}
/>

# Download Netflix Video With ffmpeg

<PostDate date={date} />

Open the **network tab** and look for the _audio_ stream. See [the docs](https://example.test/docs).

![a screenshot](/blog/netflix/shot.png)

## Merge them

- First item
- Second item

> A quoted tip about Configuração.

\`\`\`bash
ffmpeg -i video.mp4 -i audio.m4a -c copy out.mkv
\`\`\`

| Stream | Size |
|---|---|
| video | 1 GB |

---
`;

export function entry(overrides: Partial<SearchIndexEntry>): SearchIndexEntry {
  return {
    slug: "post",
    title: "A post",
    description: "A description",
    date: "2026-01-01",
    tags: [],
    body: "Some body text.",
    ...overrides,
  };
}

export const SAMPLE_INDEX: SearchIndexEntry[] = [
  entry({
    slug: "netflix-download-ffmpeg",
    title: "Download Netflix Video and Audio by Hand With the Browser and ffmpeg",
    description: "Find the streams in the network tab and merge them with ffmpeg.",
    date: "2026-10-28",
    tags: ["Netflix", "ffmpeg"],
    body: "Open the network tab. Then run ffmpeg to merge the video and the audio into one file.",
  }),
  entry({
    slug: "linux-mint-setup",
    title: "From Ubuntu to Arch to Mint: How I Finally Left Windows Behind",
    description: "I switched to Linux Mint and wrote the setup script.",
    date: "2026-08-29",
    tags: ["Linux Mint", "Arch"],
    body: "The script installs ffmpeg, GIMP and Kdenlive. Mint is the distro I kept. Configuração in Portuguese.",
  }),
  entry({
    slug: "gimp-setup",
    title: "Turning GIMP Into My Photoshop, One Script at a Time",
    description: "Why I built gimp-setup.",
    date: "2026-08-28",
    tags: [],
    body: "GIMP with AI plug-ins baked in. GIMP again. GIMP once more. GIMP four. GIMP five. GIMP six.",
  }),
];
