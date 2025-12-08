FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

# Install curl for healthcheck
RUN apk add --no-cache curl

COPY . .

EXPOSE 5000