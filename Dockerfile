FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run start