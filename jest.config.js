module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  // @octokit/request-error v6 (pulled in by @github/dependency-submission-toolkit v2.0.5)
  // ships ESM-only, which Jest (CJS mode) cannot parse. Map to the top-level v5
  // installation which has a CJS dist-node build. Production builds are unaffected
  // since ncc handles ESM/CJS bundling correctly.
  moduleNameMapper: {
    '^@octokit/request-error$':
      '<rootDir>/node_modules/@octokit/request-error/dist-node/index.js'
  },
  verbose: true
}