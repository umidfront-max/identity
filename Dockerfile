FROM node:20-alpine as build-stage
WORKDIR /usr/src/app

COPY package*.json ./
COPY vite.config.ts ./

RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]
