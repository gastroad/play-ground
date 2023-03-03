/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  // collectCoverage: true,
  moduleNameMapper: {
    "^@src(.*)$": "<rootDir>/src$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
  },
};
