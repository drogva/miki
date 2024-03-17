const { createMikroOrmOptionsFromConfig } = require('./config'); // 경로 수정
const index = require('./src/index');
const { defineConfig } = require('mikro-orm');
const { MySqlConnection } = require('mysql');
console.log("Hello, world!");
function createMikroOrmOptions() {
    // 여기에 추가
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

module.exports = {
    createMikroOrmOptionsFromConfig // 모듈로 export
};