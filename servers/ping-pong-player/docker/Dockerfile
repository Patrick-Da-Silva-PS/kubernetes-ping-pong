FROM node:16

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install --omit=dev

COPY . .

RUN npm run build

ENV NODE_ENV=production

CMD [ "node", "dist/main" ]