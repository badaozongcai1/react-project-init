// config/webpack/paths.js
const path = require("path");

const resolveApp = (relativePath) =>
  path.resolve(__dirname, "../../", relativePath);

module.exports = {
  // Output
  appBuild: resolveApp("dist"),

  // Source aliases
  appSrc: resolveApp("src"),
};
