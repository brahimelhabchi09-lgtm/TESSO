# Stage 1: Build React Application
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . ./
RUN npm run build

# Stage 2: Serve with Nginx Alpine
FROM nginx:alpine

# Remove default nginx configurations
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose container port
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
