const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API AWS',
            version: '0.0.1',
            description: 'API de exemplo para integração com a AWS',
        },
        tags: [
            {
                name: 'CRUD MongoDb',
                description: 'Operações de CRUD para usuários no MongoDb.'
            },
            {
                name: 'Buckets',
                description: 'Operações de Listar buckets, upload e remoção de arquivo para um bucket S3.'
            },
            {
                name: 'Produtos',
                description: 'Operações de CRUD para produtos no MySQL (RDS AWS).'
            }
        ]
    },
    apis: ['./server.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger rodando em: http://localhost:3000/swagger');
};

module.exports = swaggerDocs;
