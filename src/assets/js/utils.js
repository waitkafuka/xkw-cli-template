export function isNotEmpty(obj) {
  return !!(obj && Object.keys(obj).length);
}

export function isEmpty(obj) {
  return !isNotEmpty(obj);
}
