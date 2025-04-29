/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  dir: './src/app',

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // collectCoverageFrom: undefined,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",


  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],

  moduleNameMapper: {
    //  "@/*": ["./src/*"] from jsconfig.json
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  testEnvironment: "jest-environment-jsdom", // Use jsdom for testing React components
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup Testing Library

  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use babel-jest to transform JSX
  },
};

module.exports = config;
