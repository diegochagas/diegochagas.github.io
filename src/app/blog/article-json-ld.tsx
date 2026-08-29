interface ArticleJsonLdProps {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  datePublished,
}: ArticleJsonLdProps) {
  const url = `https://www.diegochagas.com/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: "Diego Chagas",
      url: "https://www.diegochagas.com",
    },
    publisher: {
      "@type": "Person",
      name: "Diego Chagas",
      url: "https://www.diegochagas.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
