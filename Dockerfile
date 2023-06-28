FROM node:18-alpine as build

WORKDIR /theme
COPY . . 

RUN npm install
RUN npm run build

FROM alpine

COPY --from=build /theme/theme /theme
