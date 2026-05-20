# Spark

Spark is an AI app builder I built — you describe what you want in plain English and it puts together a working Next.js app for you, running live inside a sandbox while you watch.

Try it here: [spark-lemon-psi.vercel.app](https://spark-lemon-psi.vercel.app/)

## About

You chat with an AI agent that writes, edits, and runs code on your behalf. Every project spins up its own isolated sandbox so the generated app actually runs, and you can see the preview side by side with the chat and browse through the file tree to see what got built. Auth, projects, billing, and rate limiting are all wired up so the whole thing works end to end.

## Built with

Next.js 15 (App Router), React 19 and TypeScript on the frontend, styled with Tailwind v4 and shadcn/ui. Clerk handles auth and billing, Postgres on Neon stores the data through Prisma 7, and the API layer is tRPC 11 with TanStack Query. The AI side runs in the background through Inngest and `@inngest/agent-kit`, and the generated code executes inside E2B sandboxes. GPT-5.1 powers the main code-writing agent and GPT-4o handles the smaller helper agents. Hosted on Vercel.
