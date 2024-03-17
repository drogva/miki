FROM node:latest

WORKDIR ./

COPY package*.json ./src/
COPY ./src/ ./src/
RUN ls ./src/package-lock.json && ls ./src/node_modules || npm install



CMD ["node", "src/hello.js"]
