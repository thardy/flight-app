const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "miles-app",

  exposes: {
    "./Component": "./projects/miles-app/src/app/app.component.ts",
    "./Routes": "./projects/miles-app/src/app/app.routes.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
