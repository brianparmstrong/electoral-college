module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '.(css|less|scss)$': 'babel-jest',
  },
};
