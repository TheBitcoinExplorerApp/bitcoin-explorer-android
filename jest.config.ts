import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  collectCoverage: true,
  modulePaths: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^.+\\.(svg)$": "<rootDir>/src/__mocks__/svg.tsx",
  },
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!**/src/assets/**",
    "!**/*.d.ts",
    "!**/types.ts",
    "!**/translations/**",
    "!**/src/utils/**",
    "!**/src/services/**",
    "!**/src/api/**",
    "!**/*.config.ts",
    "!**/src/env/**",
    "!**/src/context/**",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|nanoid)",
  ],
};

export default config;
