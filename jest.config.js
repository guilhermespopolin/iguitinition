module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**.{js,jsx}',
    '!src/components/App.jsx',
    '!src/components/Routes.jsx',
    '!src/reducers/**',
    '!src/index.js',
    '!src/store.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  modulePaths: ['<rootDir>/src'],
  setupFiles: ['./jestsetup.config.js'],
};
