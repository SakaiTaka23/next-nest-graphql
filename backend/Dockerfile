FROM node:17 AS deps
WORKDIR /app
COPY package.json yarn.lock ./
COPY prisma ./prisma/
RUN yarn install --frozen-lockfile \
    && yarn prisma generate


FROM node:17 AS dev
RUN apt-get update \
    && apt-get install -y netcat --no-install-recommends
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 5000
CMD ["bash", "./wait-db.sh", "yarn", "dev"]


FROM node:17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build


FROM node:17 AS production
RUN apt-get update \
    && apt-get install -y netcat --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
ENV NODE_ENV production
COPY .env .
COPY wait-db.sh . 
RUN yarn install --frozen-lockfile \
    && yarn prisma generate \
    && yarn cache clean
COPY --from=builder /app/dist ./dist
COPY joined.graphql ./dist/joined.graphql
EXPOSE 5000
CMD ["bash", "./wait-db.sh", "node", "dist/main" ]
