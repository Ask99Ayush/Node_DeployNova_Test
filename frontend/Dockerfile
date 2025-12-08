FROM nginx:stable-alpine

# remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

COPY . /usr/share/nginx/html

EXPOSE 80
