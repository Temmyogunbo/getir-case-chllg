# FROM node:14-alpine AS builder

# RUN mkdir -p /home/getir/app

# COPY . ./home/getir/app

# # RUN npm install && npm cache clean --force
# WORKDIR /home/getir/app

# # COPY package.json  .
# # COPY package-lock.json  .
# ARG REACT_APP_API_URL=https://emmanuel-json-webserver.herokuapp.com
# ARG REACT_APP_PAGE_SIZE=16

# ENV REACT_APP_API_URL=$REACT_APP_API_URL
# ENV REACT_APP_PAGE_SIZE=$REACT_APP_PAGE_SIZE

# RUN yarn install && yarn build

# FROM node:14-alpine

# # COPY . .
# # RUN npm run build
# # USER node
# # EXPOSE  8080

# USER node
# # EXPOSE 8080

# COPY --from=builder /home/getir/app/build /home/getir/app/package.json /home/getir/app/yarn.lock /home/getir/app/server.js ./
# WORKDIR /home/getir/app
# EXPOSE 3000
# RUN yarn install
# CMD ["node", "server.js"]
FROM node:14-alpine AS builder

WORKDIR /getir-case-chllg

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install

COPY . .

ARG REACT_APP_API_URL=https://emmanuel-json-webserver.herokuapp.com
ARG REACT_APP_PAGE_SIZE=16

ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_PAGE_SIZE=$REACT_APP_PAGE_SIZE

RUN yarn build
EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]