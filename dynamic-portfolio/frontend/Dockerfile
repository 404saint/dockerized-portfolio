# Stage 1: Build the frontend app
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve using nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

FROM nginx:alpine

# Copy your static website files into the default Nginx web root
COPY website/ /usr/share/nginx/html/

# Expose port 80 (HTTP)
EXPOSE 80

# Default Nginx command (optional, here for clarity)
CMD ["nginx", "-g", "daemon off;"]
