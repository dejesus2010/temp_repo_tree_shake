

module.exports = {
  presets: [
    ['@babel/preset-env',{targets: {node: 'current'}, modules: false}],
    '@babel/preset-react',
    '@babel/preset-flow',
  ],
  plugins: [
    'styled-components',
    '@babel/plugin-transform-flow-comments',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
  ],
  env: {
    production: {
      plugins: [
        'lodash',
        'transform-react-remove-prop-types',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements',
      ],
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'dynamic-import-node',
      ],
    },
  },
};
