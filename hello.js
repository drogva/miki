const { defineConfig } = require('mikro-orm');
const { MySqlConnection } = require('mysql');

// configService 객체 가져오기
const configService = require('./config');

console.log("Hello, world!");

function createMikroOrmOptions() {
    // configService 객체의 값을 사용하여 MikroORM 설정 생성
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

// config.js에서 가져온 함수 내보내기
module.exports = {
    createMikroOrmOptions: createMikroOrmOptions
};
