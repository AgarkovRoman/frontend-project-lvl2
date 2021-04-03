export default function isObjectHasProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}
