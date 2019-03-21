module.exports = {
  branch: "master",
  repositoryUrl: "https://github.com/sabicalija/gh-publish",
  tagFormat: "v${version}",
  plugins: [
    [
      "@semantic-release/npm",
      {
        npmPublish: false
        // tarballDir: "dist"
      }
    ],
    [
      "@semantic-release/github",
      {
        assets: [{ path: "test", label: "test file" }, { path: "testdir/*", label: "test folder" }]
      }
    ],
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "docs", scope: "README", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "major", release: "major" }
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"]
        }
      }
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
        writerOpts: {
          commitsSort: ["subject", "scope"]
        }
      }
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ]
  ],
  dryRun: false,
  ci: false
};
