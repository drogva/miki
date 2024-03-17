FROM node:latest

WORKDIR ./

COPY package*.json ./src
COPY ./src/ ./
RUN npm install


CMD ["node", "src/hello.js"]
