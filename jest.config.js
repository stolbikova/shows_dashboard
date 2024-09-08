const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle CSS modules
    "^.+\\.module\\.(css)$": "identity-obj-proxy",
  },
};

module.exports = createJestConfig(customJestConfig);
