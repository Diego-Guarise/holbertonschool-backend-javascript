export default function guardrail(mathFunction) {
  const list = [];
  let result = null;

  try {
    result = mathFunction();
  } catch (err) {
    result = `${err.name}: ${err.message}`;
  }

  list.push(result);
  list.push('Guardrail was processed');
  return list;
}
