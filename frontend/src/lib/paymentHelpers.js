import parseHarga from "./ParseHarga";

// Normalize amount input to integer string (drop decimals), or empty string if invalid
export function normalizeAmount(value) {
  const numeric = parseHarga(value);
  if (numeric === null) return "";
  return Math.trunc(numeric).toString();
}

export default { normalizeAmount };