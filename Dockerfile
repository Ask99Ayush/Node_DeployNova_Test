# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first for caching dependencies
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the project files
COPY . .

# Expose default Node port (change if different in server.js)
EXPOSE 3000

# Start the Node.js server
CMD ["node", "server.js"]
