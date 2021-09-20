FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json  .
COPY package-lock.json  .

RUN npm install && npm cache clean --force

COPY . .
RUN npm run build
USER node

CMD ["node", "server.js"]
