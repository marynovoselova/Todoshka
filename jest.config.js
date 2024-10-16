module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.(ts|tsx|svg)$': 'ts-jest',
    '\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@icons/(.*)$': '<rootDir>/src/shared/assets/icons/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@mocks/(.*)$': '<rootDir>/__mocks__/$1',
    '^react-i18next$': '<rootDir>/__mocks__/react-i18next.ts',
    '\\.svg$': '<rootDir>/__mocks__/svgMock.js',
    '\\.module\\.(css|scss)$': 'identity-obj-proxy',
  },
};
