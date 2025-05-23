# Use a slim, modern Node image
FROM node:22-slim

# Set working directory inside the container
WORKDIR /app

# Install pnpm via Corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files and install dependencies first
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy the rest of the source code
COPY . .

# Expose the Vite dev server port
EXPOSE 5173

# Start the dev server with Vite
CMD ["pnpm", "dev"]
