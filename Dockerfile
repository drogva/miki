# 베이스 이미지 설정
FROM node:12.18.1

# 관리하는 사람
MAINTAINER DaEunShim

# dockerfile이 동작할 디렉터리 생성 
RUN mkdir /app

# /app 을 기본 디렉터리로 설정
WORKDIR /app

#현재 dockerfile 있는 경로의 모든 파일을 /app에 복사
COPY . /app

# npm install 실행
RUN npm install

# 가상 머신에서 오픈할 포트번호 지정
EXPOSE 3000

# 실행할 명령어 작성
CMD ["npm", "start"]
