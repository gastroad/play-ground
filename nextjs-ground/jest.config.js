const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});
/** @type {import('jest').Config} */
const customJestConfig = {
    testEnvironment: 'jest-environment-jsdom',
    // collectCoverage: true,
    // collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}',],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        "^@src(.*)$": "<rootDir>/src$1",
    },
}
module.exports = createJestConfig(customJestConfig)

