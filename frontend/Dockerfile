FROM node:17-alpine AS dev

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn","dev"]


FROM node:17-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

ENV NODE_ENV=production

COPY . .
RUN ["yarn", "next", "build"]


FROM node:17-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/public ./public

RUN yarn install --frozen-lockfile

COPY --from=builder /app/.next ./.next

EXPOSE 3000
CMD ["yarn", "start"]
