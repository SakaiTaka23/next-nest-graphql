FROM node:17 AS dev

RUN apt-get update && apt-get install -y netcat

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["bash", "./wait-db.sh", "yarn", "dev"]


FROM node:17 AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


FROM node:17 AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 5000
CMD ["bash", "./wait-db.sh", "yarn", "start:prod" ]
