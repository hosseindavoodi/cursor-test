FROM node:21-alpine AS base

# Stage 1: The builder stage
FROM base AS builder
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
# Enable corepack for pnpm and install it
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy all project files
COPY . .
# Install all dependencies
RUN pnpm install
# Prune the server workspace, using 'pnpm exec' to find the turbo command
RUN pnpm exec turbo prune server --docker

# Stage 2: The installer stage
FROM base AS installer
RUN apk update && apk add --no-cache libc6-compat
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy the pruned project from the builder stage
COPY --from=builder /app/out/full/ .
# Install the pruned dependencies
# Set Turbo-related environment variables for the build
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
# Build the server application
RUN pnpm install
# RUN pnpm exec turbo link
RUN pnpm exec turbo build

# Stage 3: The runner stage
FROM base AS runner
WORKDIR /app
# Create non-root user and group
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
# Switch to the non-root user
USER nextjs
# Copy the built application from the installer stage
COPY --from=installer --chown=nextjs:nodejs /app/. .
# Start the application
CMD [ "node", "apps/server/dist/src/main.js" ]