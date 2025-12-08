FROM node:20-alpine

WORKDIR /app

# Install a lightweight static server
RUN npm install -g serve

COPY . .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
