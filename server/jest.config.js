module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json",
    },
  },
  testMatch: ["**/__tests__/*.(ts|tsx|js)", "**/tests/**/*.test.(ts|js)"],
  testEnvironment: "node",
  coveragePathIgnorePatterns: [],
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
};
