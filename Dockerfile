# Install npm dependencies
RUN npm install

# Copy webpack configuration files
COPY webpack.config.js ./

# Copy source code
COPY ./src/ ./src/

# Copy hello.js and config.js
COPY hello.js ./
COPY config.js ./

# Build the project
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to run the application
CMD ["node", "src/hello.js"]
