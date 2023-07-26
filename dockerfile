FROM node:16.15-alpine3.14 AS development

WORKDIR /app

COPY ./package.json /app/package.json

RUN npm install

COPY ./server.js /app/
COPY ./quotes.json /app/

EXPOSE 3000
CMD [ "node", "server.js" ]
