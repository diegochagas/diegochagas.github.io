import Link from "next/link";
import { blogPosts } from "@/app/data/blog-posts";

export default function Blog() {
  return (
    <div>
      <p className="text-sm uppercase text-zinc-500 tracking-[0.4em] pb-1">
        Diego Chagas
      </p>
      <h1 className="mt-0.5 md:mt-2 text-4xl md:text-6xl font-extrabold tracking-tighter">
        Blog
      </h1>

      <ul className="mt-12 md:mt-16 space-y-10">
        {blogPosts.map((post) => (
          <li key={post.slug} className="border-t border-zinc-100 pt-8 first:border-0 first:pt-0">
            <Link href={`/blog/${post.slug}`} className="group block">
              <time
                dateTime={post.date}
                className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500"
              >
                {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-2 relative inline border-b-2 border-transparent group-hover:border-gray-900 transition-all duration-200">
                {post.title}
              </h2>
              <p className="text-zinc-500 font-medium mt-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
