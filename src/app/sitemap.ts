import type { MetadataRoute } from "next";
import { blogPosts } from "@/app/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.diegochagas.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.diegochagas.com/abacus-institute-of-studies",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.diegochagas.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `https://www.diegochagas.com/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
