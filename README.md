# ctw-kickstart

This is a starting point for fast, opinionated project development, built for speed, clarity, and developer empathy.

behind the choices: [Choosing a Stack for Fun and Profit](https://ctw.dev/blog/choosing-a-stack)

---

## what's included

- Vue 3 + Vite + TypeScript
- Tailwind CSS (with Prettier plugin)
- ESLint (flat config) + Prettier (tabs, no semicolons)
- pnpm as the package manager (via Corepack)
- Vitest installed, but tests not yet scaffolded
- Dockerfile for local dev (HMR, color logs, no install step)
- `.gitignore` and `.dockerignore` tuned for real-world reuse

---

## getting started

```bash
# Clone the repo
git clone https://github.com/curvetheweb/ctw-kickstart.git
cd ctw-kickstart

# Build the Docker image
docker build -t ctw-kickstart .

# Run with live reload
docker run -it -p 5173:5173 -v $(pwd):/app ctw-kickstart
```

Then visit http://localhost:5173

---
## philosophy
- Tabs are more accessible. Developers choose their own indentation width.
- No semicolons. Let Prettier breathe.
- Tailwind is not optional. It speeds up idea-to-interface iteration.
- Flat ESLint config because the old style is on its way out.
- Testing is opt-in. No E2E until there's something worth testing.

## not yet included
- Supabase
- Fastify
- Docker Compose
- CI/CD pipelines
- Unit or integration test scaffolding

These will be added when a project actually needs them.