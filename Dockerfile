FROM nginx:alpine

# Copy the HTML, CSS, and JavaScript files to the Nginx web server directory
COPY src/ /usr/share/nginx/html/

# Expose port 80 to allow external access to the web server
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]