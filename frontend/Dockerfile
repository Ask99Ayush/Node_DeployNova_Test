# Frontend Dockerfile
FROM node:18

WORKDIR /app

COPY . .

# Install simple static file server
RUN npm install -g http-server

EXPOSE 3000

CMD ["http-server", ".", "-p", "3000"]
