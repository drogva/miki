# 기반 이미지 설정
FROM node:latest

# 작업 디렉토리를 /usr/src/app으로 설정
WORKDIR /usr/src/app

# 소스 코드 및 의존성 파일을 복사
COPY package*.json ./
COPY . .

# npm을 사용하여 필요한 모듈 설치
RUN npm install

# 어플리케이션 실행을 위한 명령어 설정
CMD ["npm", "start"]
