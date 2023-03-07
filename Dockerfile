FROM node:latest

WORKDIR /code
COPY .git .
COPY package*.json ./
RUN npm i

COPY . .
EXPOSE 3000

