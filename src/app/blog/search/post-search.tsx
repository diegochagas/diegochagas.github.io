"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import type { SearchIndexEntry } from "@/lib/search/search-types";
import { fetchSearchIndex } from "./search-index-client";
import { SearchPanel } from "./search-panel";
import { SearchToggleButton } from "./search-toggle-button";
import { usePostSearch } from "./use-post-search";

interface PostSearchProps {
  /** Overridden in tests with a fake index; the site uses the static /blog/search-index route. */
  loadIndex?: () => Promise<SearchIndexEntry[]>;
}

export function PostSearch({ loadIndex = fetchSearchIndex }: PostSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const search = usePostSearch(isOpen, loadIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    inputRef.current?.focus();
    return listenForOutsideClick(containerRef, close);
  }, [isOpen, close]);

  function onInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") return close();
    const first = search.results[0];
    if (event.key !== "Enter" || !first) return;
    close();
    router.push(`/blog/${first.entry.slug}`);
  }

  return (
    <div ref={containerRef} className="contents">
      <SearchToggleButton isOpen={isOpen} onToggle={() => setIsOpen((open) => !open)} />
      {isOpen && <SearchPanel search={search} inputRef={inputRef} onKeyDown={onInputKeyDown} onNavigate={close} />}
    </div>
  );
}

function listenForOutsideClick(containerRef: React.RefObject<HTMLDivElement | null>, close: () => void) {
  function onPointerDown(event: PointerEvent) {
    const panel = document.getElementById("post-search-panel");
    const target = event.target as Node;
    if (containerRef.current?.contains(target) || panel?.contains(target)) return;
    close();
  }
  document.addEventListener("pointerdown", onPointerDown);
  return () => document.removeEventListener("pointerdown", onPointerDown);
}
