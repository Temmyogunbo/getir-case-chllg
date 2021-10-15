# Build Stage 1
# This build created a staging docker image
#
FROM node:14-alpine AS builder

WORKDIR /home/getir/app

COPY package.json  .
COPY yarn.lock  .

ARG REACT_APP_API_URL=https://emmanuel-json-webserver.herokuapp.com
ARG REACT_APP_PAGE_SIZE=16

ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_PAGE_SIZE=$REACT_APP_PAGE_SIZE

COPY . .

RUN yarn install && yarn build


# Build Stage 2
# This build takes the production build from staging build

FROM node:14-alpine

WORKDIR /home/getir/app

COPY package.json .
COPY yarn.lock .

RUN yarn install --production && yarn cache clean


COPY --from=builder /home/getir/app/build  ./build
COPY --from=builder /home/getir/app/server.js  ./server.js

USER node

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]
