FROM node:latest

WORKDIR ./

COPY package*.json ./src/
COPY ./src/ ./src/
RUN npm install


CMD ["node", "src/hello.js"]
