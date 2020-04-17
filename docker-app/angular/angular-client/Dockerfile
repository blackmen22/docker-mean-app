# from https://github.com/nodejs/docker-node/tree/master/13
FROM node:13.11


RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/

# Install dependecies
RUN npm install

COPY . /app/
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
