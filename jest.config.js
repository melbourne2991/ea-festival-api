module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "!**/helpers.ts"],
};
