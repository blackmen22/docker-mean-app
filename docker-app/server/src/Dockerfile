# from https://github.com/nodejs/docker-node/tree/master/13
FROM node:13.11-alpine


RUN nodemon ts-node typescript -g 
RUN @types/express @types/node

RUN mkdir -p /usr/src/app


WORKDIR /usr/src/app

COPY package.json /usr/src/app


RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm","start", "nodestart","build/server.js"]
