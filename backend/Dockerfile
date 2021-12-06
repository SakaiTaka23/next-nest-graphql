FROM node:16-alpine AS dev

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["yarn", "dev"]


FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build


FROM node:16-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 5000
CMD [ "yarn", "start:prod" ]
