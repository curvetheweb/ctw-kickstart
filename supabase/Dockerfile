# filepath: [Dockerfile](http://_vscodecontentref_/0)
FROM node:20-alpine

WORKDIR /supabase

# install Docker CLI so `supabase start` can call it
RUN apk add --no-cache docker-cli

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

CMD ["pnpx", "supabase", "start"]