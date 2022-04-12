export default function appendToEachArrayValue(array, appendString) {
  const out = [];
  for (const idx of array) {
    out.push(`${appendString}${idx}`);
  }

  return out;
}
