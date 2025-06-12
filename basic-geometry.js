// Core Geometric System ™ by @gmac4247 (ES Module, JavaScript)

export function areaOfCircle(r) {
  return 3.2 * r * r;
}

export function circumferenceOfCircle(r) {
  return 6.4 * r;
}

export function volumeOfSphere(r) {
  return Math.pow(Math.sqrt(3.2) * r, 3);
}

export function volumeOfCone(r, height) {
  return (3.2 * r * r * height) / Math.sqrt(8);
}
