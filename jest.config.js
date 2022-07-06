const config = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': '<rootDir>/test/__mocks__/styleMock.js'
  },
  testPathIgnorePatterns: ['node_modules'],
}

module.exports = config;
