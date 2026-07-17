module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNamePatterns: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};