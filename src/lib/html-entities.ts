/**
 * Decode the HTML entities most commonly hand-written in our data files
 * (curly quotes, em-dashes, ampersand). Lets us avoid
 * `dangerouslySetInnerHTML` for trusted, hand-curated copy.
 */
export function decodeEntities(input: string): string {
  return input
    .replace(/&ldquo;/g, "\u201C")
    .replace(/&rdquo;/g, "\u201D")
    .replace(/&lsquo;/g, "\u2018")
    .replace(/&rsquo;/g, "\u2019")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&hellip;/g, "\u2026")
    .replace(/&amp;/g, "&");
}
