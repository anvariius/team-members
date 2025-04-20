export const includesQuery = (str: string, query: string): boolean => {
  const normalize = (s: string) => s.toLowerCase().trim().replace(/\s+/g, " ");
  return normalize(str).includes(normalize(query));
};
