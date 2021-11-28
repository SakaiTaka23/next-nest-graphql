FROM node:16-alpine AS dev

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

EXPOSE 5000

CMD ["yarn", "dev"]


FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

CMD [ "yarn", "build"]


FROM node:16-alpine AS production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

EXPOSE 5000
CMD [ "npm", "run", "start:prod" ]
