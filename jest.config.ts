export default {
  testPathIgnorePatterns: [
    '<rootDir>/public',
    '<rootDir>/scripts',
    '<rootDir>/src/graphql',
    '<rootDir>/src/static',
    '<rootDir>/src/vendor',
    '<rootDir>/e2e',
  ],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.json' }],
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '.+\\.(css|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  cacheDirectory: '<rootDir>/.jest_cache',
}
