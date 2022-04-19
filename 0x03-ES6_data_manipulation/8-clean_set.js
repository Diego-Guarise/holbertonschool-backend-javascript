export default function cleanSet(mySet, startString) {
  if (startString.length === 0) return '';
  const slice = startString.length;
  const array = [...mySet]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(slice));
  return array.join('-');
}
