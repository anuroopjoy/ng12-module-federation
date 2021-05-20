const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.base.json'), [
  '@ng12-module-fed/corelib',
]);

module.exports = {
  output: {
    uniqueName: 'remote',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      // name: 'remote',
      // filename: 'remoteEntry.js',
      // exposes: {
      //   './RemoteModule': './apps/remote/src/app/remote/remote.module.ts',
      // },
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteComponent': './apps/remote/src/app/remote/remote.component.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "container": "container@http://localhost:4200/remoteEntry.js",

      // },

      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/common/http': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
