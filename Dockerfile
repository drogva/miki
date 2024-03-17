FROM node:latest

WORKDIR ./

COPY package*.json ./src
COPY ./src .



CMD ["node", "src/hello.js"]