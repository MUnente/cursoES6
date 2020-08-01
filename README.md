## Comandos de configuração do babel e do webpack

- `yarn init`
- `yarn add @babel/cli -D`
- `yarn add @babel/core -D`
- `yarn add @babel/preset-env -D`: Configura o arquivo de config do babel (.babelrc)
- `yarn add webpack webpack-cli -D`: Configura o arquivo de config do webpack (webpack.config.js). Para mais informações de configuração: https://webpack.js.org/configuration/

Se tiver funcionando:
- `yarn add babel-loader -D`

Se não:
- `yarn add babel-loader@8.0.0-beta.0 -D`
- `yarn add webpack-dev-server -D`
- `yarn add @babel/polyfill -D`


PLUGINS:

- `yarn add @babel/plugin-proposal-object-rest-spread -D`
- `yarn add @babel/plugin-transform-async-to-generator -D`

BIBLIOTECAS:

- `yarn add axios`