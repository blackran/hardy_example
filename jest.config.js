// https://jestjs.io/docs/en/configuration.html

module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/setup.config.js',
  ],
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs,ts}'],

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts'],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: ['<rootDir>/setup.config.js'],

  // The test environment that will be used for testing
  // testEnvironment: 'jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    // '**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'
    '**/*.steps.js',
    '**/*.steps.ts',
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],

  // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
  testURL: 'http://localhost',

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
    // "/node_modules/(?!(@react-native|react-native)/).*/"
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: false,
};
