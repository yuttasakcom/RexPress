FROM node:9.3.0-alpine

RUN mkdir -p /opt/app

WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install --verbose && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

CMD [ "npm", "run", "dev" ]