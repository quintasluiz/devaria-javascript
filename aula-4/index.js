// configuraro nosso express
//criar o controller par receber a requisicao
//devolver para o usuario os dados dele via json
// swaggercel

const App = require('./src/App');

const api = new App();
api.start();