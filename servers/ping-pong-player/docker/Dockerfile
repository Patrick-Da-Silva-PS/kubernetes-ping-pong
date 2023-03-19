# Builder
FROM node:16-alpine AS builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

ENV NODE_ENV production

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build

# Production
FROM node:16-alpine AS production

COPY --from=builder /usr/src/app/node_modules /usr/app/node_modules
COPY --from=builder /usr/src/app/dist /usr/app/dist

WORKDIR /usr/app

ENV NODE_ENV production

CMD [ "node", "dist/main" ]