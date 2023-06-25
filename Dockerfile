FROM node:18-alpine

WORKDIR /theme
COPY package.json package.json
COPY tsconfig.json tsconfig.json
COPY tsconfig.node.json tsconfig.node.json
COPY vite.config.ts vite.config.ts
COPY src src

RUN npm install
RUN npm run build