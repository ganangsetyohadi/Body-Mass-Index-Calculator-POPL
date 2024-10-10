# Menggunakan image base nginx untuk hosting
FROM nginx:alpine

# Copy file HTML, CSS, JS, dan asset ke direktori default nginx
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./script.js /usr/share/nginx/html/script.js
COPY ./asset/background-hero.jpg /usr/share/nginx/html/asset/background-hero.jpg

# Expose port 80 untuk akses
EXPOSE 80
