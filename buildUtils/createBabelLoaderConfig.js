const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const { presets } = require("./babel.config");

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory();
  });
}

const workspacePath = path.resolve(__dirname, "../");
const packages = getDirectories(path.resolve(workspacePath, "./packages"));

module.exports = ({
  omitPackages = [],
  include = [],
  compileNodeModules = [],
}) => {
  const packagesToWatch = packages
    .filter((package) => !omitPackages.includes(package))
    .map((package) => path.resolve(workspacePath, `./packages/${package}`));

  const compileNodeModulesList = [
    // Add every react-native package that needs compiling
    // 'react-native-gesture-handler',
    ...compileNodeModules,
  ].map((moduleName) =>
    path.resolve(workspacePath, `./node_modules/${moduleName}`)
  );

  return {
    test: /\.js$|tsx?$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [...include, ...compileNodeModulesList, ...packagesToWatch],
    use: {
      loader: "babel-loader",
      options: {
        cacheDirectory: true,
        presets,
        plugins: ["react-native-web"],
      },
    },
  };
};
