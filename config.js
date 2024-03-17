// config.js 파일

// 필요한 패키지 및 모듈을 불러옵니다.
const { defineConfig } = require('mikro-orm');
const { MySqlConnection } = require('mysql');

// createMikroOrmOptionsFromConfig 함수를 정의합니다.
function createMikroOrmOptionsFromConfig(configService) {
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

// 모듈로 내보냅니다.
module.exports = {
    createMikroOrmOptionsFromConfig
};