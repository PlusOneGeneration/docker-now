FROM node:7
LABEL name "hello-app"

ADD ./app /app
WORKDIR /app
RUN npm install

EXPOSE 3000
ENTRYPOINT node index.js