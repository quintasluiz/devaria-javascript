const ApiConstants = require('../enums/ApiConstants');

class BaseController {
    constructor(expressInstance) {
        if(!expressInstance) {
            throw new Error('A instancia do express e obrigatoria')
        }

        this.express = expressInstance;
        this.setupRoutes(ApiConstants.BASE_PATH);
    }
    //definiçao do metodo abstrato para ser implementado nas classes filhas
    setupRoutes() {
        throw new Error('setupRoutes deve ser inplementado');
    }
}

module.exports = BaseController;