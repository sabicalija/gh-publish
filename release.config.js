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
    ]
  ],
  dryRun: false,
  ci: false
};
