export function createBlogExcerpt(text, maxWords) {
  const words = text.split(' ');
  return words.length > maxWords ? words.slice(0, maxWords).join(' ') : text;
}
