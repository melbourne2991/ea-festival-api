module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  testMatch: ["<rootDir>/src/**/__tests__/**/*.+(ts|tsx|js)", "!**/helpers.ts"],
};
