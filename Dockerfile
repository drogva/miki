FROM node:latest

WORKDIR ./

COPY package*.json ./
RUN npm install

COPY ./src/ ./src/

CMD ["node", "hello.js"]