FROM node:latest

WORKDIR /app

# Install npm dependencies
COPY package*.json ./
RUN npm install

# Copy webpack configuration files
COPY webpack.config.js ./

# Copy source code
COPY ./src/ ./src/

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "src/hello.js"]
