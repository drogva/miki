const express = require('express');
const { defineConfig } = require('mikro-orm');
const { MySqlConnection } = require('mysql');
const configService = require('./config');

const PORT = 8080;
const app = express();

// MikroORM 설정 생성 함수
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

// '/' 엔드포인트
app.get('/', (req, res) => {
    res.send("반갑습니다.");
});

// 서버 구동 및 MikroORM 설정
app.listen(PORT, () => {
    console.log('Server is running');
    const mikroOrmOptions = createMikroOrmOptions();
    // 여기서 MikroORM 설정을 사용하여 필요한 작업을 수행할 수 있습니다.
});
