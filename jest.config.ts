import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "jest-expo",
  collectCoverage: true,
  modulePaths: ["<rootDir>"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!**/src/assets/**",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};

export default config;
