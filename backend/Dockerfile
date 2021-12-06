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

RUN yarn install

COPY . .

CMD [ "yarn", "build"]


FROM node:16-alpine AS production

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

RUN yarn install

EXPOSE 5000
CMD [ "npm", "run", "start:prod" ]
