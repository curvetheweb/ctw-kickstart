# Use a slim, modern Node image
FROM node:22-slim

# Set working directory inside the container
WORKDIR /api

# Install pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies first
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Expose the server port
EXPOSE 8080