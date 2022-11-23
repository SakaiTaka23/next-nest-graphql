FROM node:19
WORKDIR /apps
COPY . .
RUN yarn install \
    && yarn workspace backend prisma generate \
    && yarn cache clean
EXPOSE 3000 4000
