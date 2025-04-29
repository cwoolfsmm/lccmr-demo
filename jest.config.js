/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const nextJest = require('next/jest');

const createJestConfig = nextJest({
   dir: './',
});

const jestConfig = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Support for absolute imports
  },
  testEnvironment: "jest-environment-jsdom", // Use jsdom for React components
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup Testing Library
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest", // Use SWC for transforming files
  },
};

module.exports = createJestConfig(jestConfig);
