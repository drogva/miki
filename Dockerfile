FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./src/ ./src/
COPY hello.js .
COPY config.js .

CMD ["node", "hello.js"]
