FROM node:alpine
ENV NODE_ENV development
RUN yarn global add turbo
WORKDIR /app
COPY yarn.lock package.json ./
COPY . .
RUN yarn install \
    yarn cache clean
CMD ["yarn", "dev"]
