FROM node:18.18-alpine3.17 as build

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]