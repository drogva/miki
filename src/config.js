const { createMikroOrmOptions } = require('./mikro-orm-config');

const configService = {
    DB_NAME: 'kpop',
    DB_USERNAME: 'root',
    DB_PASSWORD: 'bizkit87',
    DB_HOST: 'database-1.cg5x8ymzexwa.ap-northeast-2.rds.amazonaws.com',
    DB_PORT: '3306'
};

const mikroOrmOptions = createMikroOrmOptions(configService);

module.exports = {
    ...mikroOrmOptions,
    mode: 'development', // 또는 'production'
    // 다른 webpack 구성 옵션들...
};