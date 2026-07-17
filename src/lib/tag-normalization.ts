const tagWordCharacter = /^[\p{L}\p{N}]$/u;

export function normalizeTagName(tag: string): string {
  const normalized = tag.normalize("NFKC").trim().replace(/\s+/gu, " ");

  if (!normalized) {
    throw new Error("Tags must contain at least one non-whitespace character.");
  }

  return normalized;
}

export function normalizeTagKey(tag: string): string {
  return normalizeTagName(tag).toLowerCase();
}

export function slugifyTag(tag: string): string {
  return Array.from(normalizeTagKey(tag), (character) => {
    if (tagWordCharacter.test(character)) {
      return character;
    }

    if (character === " ") {
      return "-";
    }

    return `_${character.codePointAt(0)?.toString(16)}_`;
  }).join("");
}
