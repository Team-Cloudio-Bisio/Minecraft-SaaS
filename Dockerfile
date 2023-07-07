FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY web-app/package.json web-app/package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY web-app/ .

RUN --mount=type=secret,id=API_KEY \
	cat /run/secrets/API_KEY > .env.production.local
RUN echo -e "\n" >> .env.production.local
RUN --mount=type=secret,id=LOGIN_KEY \
	cat /run/secrets/LOGIN_KEY > .env.production.local
RUN echo -e "\n" >> .env.production.local
RUN --mount=type=secret,id=REGISTER_KEY \
	cat /run/secrets/REGISTER_KEY >> .env.production.local
RUN echo -e "\n" >> .env.production.local
RUN --mount=type=secret,id=CREATE_KEY \
	cat /run/secrets/CREATE_KEY >> .env.production.local
RUN echo -e "\n" >> .env.production.local
RUN --mount=type=secret,id=GET_KEY \
	cat /run/secrets/GET_KEY >> .env.production.local
RUN echo -e "\n" >> .env.production.local
RUN --mount=type=secret,id=DELETE_KEY \
	cat /run/secrets/DELETE_KEY >> .env.production.local

# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.env.production.local ./

USER nextjs

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
