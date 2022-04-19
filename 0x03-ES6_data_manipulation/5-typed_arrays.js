export default function createInt8TypedArray(length, position, value) {
  if (position - 1 > length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const arraybuffer = new DataView(buffer);
  arraybuffer.setInt8(position, value);
  return arraybuffer;
}
