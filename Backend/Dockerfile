FROM node:lts-alpine3.13

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "./bin/server.js"]