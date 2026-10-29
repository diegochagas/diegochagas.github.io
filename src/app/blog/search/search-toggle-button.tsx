interface SearchToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SearchToggleButton({ isOpen, onToggle }: SearchToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close search" : "Search"}
      aria-controls="post-search-panel"
      className="flex items-center gap-1.5 text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition-all duration-200 pb-0.5"
    >
      <svg width="16" height="16" viewBox="0 0 20 20" aria-hidden="true" className="shrink-0">
        <circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" strokeWidth="2.2" />
        <path d="M13 13l5.5 5.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      <span className="hidden xs:inline">{isOpen ? "Close" : "Search"}</span>
    </button>
  );
}
