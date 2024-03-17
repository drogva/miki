FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./src/ ./src/
COPY hello.js .

CMD ["node", "hello.js"]
