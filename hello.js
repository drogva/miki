const { defineConfig } = require('mikro-orm');
const { MySqlConnection } = require('mysql');

function createMikroOrmOptions() {
    return defineConfig({
        entities: [__dirname + '/entity/**/*.entity{.ts,.js}'],
        dbName: configService.DB_NAME,
        user: configService.DB_USERNAME,
        password: configService.DB_PASSWORD,
        host: configService.DB_HOST,
        port: configService.DB_PORT,
        driver: MySqlConnection,
        debug: true,
    });
}

module.exports = { createMikroOrmOptions };