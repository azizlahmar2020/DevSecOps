# Stage 1: Build the Angular application
FROM node:18-alpine as build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy the rest of the application
COPY . .

# Build the Angular app for production
RUN npm run build -- --configuration production

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy custom nginx configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built application from the build stage
COPY --from=build /app/dist/mini-projet /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
