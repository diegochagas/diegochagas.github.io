import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mt-0 mb-4" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-12 mb-4" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-xl font-extrabold tracking-tight mt-8 mb-3" {...props} />
    ),
    p: (props) => <p className="text-lg leading-relaxed text-zinc-700 mb-5" {...props} />,
    a: ({ href = "", ...props }) => (
      <Link
        href={href}
        className="font-semibold relative border-b-2 border-zinc-300 hover:border-gray-900 transition-all duration-200"
        {...props}
      />
    ),
    ul: (props) => <ul className="list-disc pl-6 mb-5 text-lg text-zinc-700 space-y-1" {...props} />,
    ol: (props) => <ol className="list-decimal pl-6 mb-5 text-lg text-zinc-700 space-y-1" {...props} />,
    blockquote: (props) => (
      <blockquote className="border-l-2 border-gray-900 pl-4 italic text-zinc-600 my-6" {...props} />
    ),
    code: (props) => (
      <code className="bg-zinc-100 rounded px-1.5 py-0.5 text-[0.9em] font-mono" {...props} />
    ),
    pre: (props) => (
      <pre
        className="bg-gray-900 text-zinc-100 rounded-lg p-4 overflow-x-auto mb-6 text-sm [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit"
        {...props}
      />
    ),
    hr: (props) => <hr className="my-10 border-zinc-200" {...props} />,
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img className="rounded-lg my-6" {...props} alt={props.alt ?? ""} />
    ),
    table: (props) => (
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse" {...props} />
      </div>
    ),
    th: (props) => (
      <th className="border-b-2 border-gray-900 py-2 pr-4 text-sm uppercase tracking-wide" {...props} />
    ),
    td: (props) => <td className="border-b border-zinc-100 py-2 pr-4 text-zinc-700" {...props} />,
    ...components,
  };
}
