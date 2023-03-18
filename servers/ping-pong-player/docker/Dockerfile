FROM node:16

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

ENV NODE_ENV=production

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build

CMD [ "node", "dist/main" ]