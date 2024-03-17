FROM node:latest

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy webpack configuration files
COPY webpack.config.js ./

# Copy source code
COPY ./src/ ./src/

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["node", "hello.js"]
