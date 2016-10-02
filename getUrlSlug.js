function getUrlSlugs(words) {
    return words
    .replace(/\s+/g, '-')
    .toLowerCase();
}