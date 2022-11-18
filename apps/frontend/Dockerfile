FROM node:19-alpine AS builder
RUN apk add --no-cache libc6-compat \
    && apk update
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=frontend --docker


FROM node:19-alpine AS installer
RUN apk add --no-cache libc6-compat \
    && apk update
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=frontend...


FROM node:19-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs
USER nextjs
COPY --from=installer /app/apps/frontend/next.config.js .
COPY --from=installer /app/apps/frontend/package.json .
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/static ./apps/frontend/.next/static
# CMD ["yarn", "prod"]
