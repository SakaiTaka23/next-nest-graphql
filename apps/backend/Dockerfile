FROM node:19 AS builder
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=backend --docker


FROM node:19 AS installer
WORKDIR /app
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
RUN yarn install
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=backend...


FROM node:19 AS runner
RUN apt-get update \
    && apt-get install -y netcat --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NODE_ENV production
COPY . .
RUN yarn install --frozen-lockfile \
    && yarn prisma generate \
    && yarn cache clean
COPY --from=builder /app/dist ./dist
EXPOSE 3100
CMD ["bash", "./wait-db.sh", "node", "dist/src/main" ]
