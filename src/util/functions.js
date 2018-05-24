export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function consoleDevOnly(val) {
  // Run only in dev mode
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    console.log(val);
  }
}

export function consoleState(state) {
  // Run only in dev mode
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    console.table(state);
  }
}

export const switchPlural = n => (n > 1 ? "s" : "");
