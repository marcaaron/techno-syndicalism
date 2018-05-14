export function printState(state) {
  // Run only in dev mode
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    console.table(state);
  }
}

export const switchPlural = n => (n > 1 ? "s" : "");
