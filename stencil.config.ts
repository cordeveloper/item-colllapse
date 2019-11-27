import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'item-collapse',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};

export const devServer = {
  root: 'www',
  watchGlob: '**/**'
}
