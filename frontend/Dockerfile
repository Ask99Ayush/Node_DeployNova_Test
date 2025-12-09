FROM node:20-alpine

WORKDIR /app

# Install lightweight static server
RUN npm install -g serve

# Copy frontend files
COPY . .

# Copy env.js generator script (handled during container start)
COPY generate_env.sh /app/generate_env.sh
RUN chmod +x /app/generate_env.sh

EXPOSE 3000

# First generate env.js, then serve
CMD ["sh", "-c", "/app/generate_env.sh && serve -s . -l 3000"]
