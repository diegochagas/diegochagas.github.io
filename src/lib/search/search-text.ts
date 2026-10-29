// Text normalisation shared by the matcher and the snippet builder.

const DIACRITICS = /[̀-ͯ]/g;
const TOKEN_SEPARATOR = /[^\p{L}\p{N}]+/u;
const REGEX_SPECIALS = /[.*+?^${}()|[\]\\]/g;

/** Lowercase, diacritics removed: "Configuração" → "configuracao". */
export function normalizeSearchText(text: string): string {
  return text.normalize("NFD").replace(DIACRITICS, "").toLowerCase();
}

/** Normalised words of a query, empty strings dropped: "Mint  Linux!" → ["mint", "linux"]. */
export function tokenizeQuery(query: string): string[] {
  return normalizeSearchText(query).split(TOKEN_SEPARATOR).filter(Boolean);
}

/** A regex matching `token` at the start of a word, for use on normalised text. */
export function wordPrefixPattern(token: string, flags = "u"): RegExp {
  return new RegExp(`(?:^|[^\\p{L}\\p{N}])${token.replace(REGEX_SPECIALS, "\\$&")}`, flags);
}
