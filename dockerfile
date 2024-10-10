# Menggunakan image base nginx untuk hosting
FROM nginx:alpine

# Copy file HTML, CSS, dan JS ke direktori default nginx
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./script.js /usr/share/nginx/html/script.js

# Perintah untuk expose port 80 agar Nginx dapat diakses
EXPOSE 80
