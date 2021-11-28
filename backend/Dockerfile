FROM node:16-alpine AS dev

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./prisma/

RUN yarn install

EXPOSE 5000

CMD ["yarn","dev"]
