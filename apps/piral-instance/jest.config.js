module.exports = {
  displayName: 'piral-instance',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {tsconfig: '<rootDir>/tsconfig.spec.json'},
  },
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageReporters: [['lcov', {projectRoot: 'apps/piral-instance'}]],
  coverageDirectory: '../../coverage/apps/piral-instance',
  reporters: [
    'default'
  ],
  testEnvironment: 'jsdom',
};
