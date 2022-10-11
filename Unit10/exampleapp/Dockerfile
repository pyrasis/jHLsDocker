FROM node:16-alpine

ADD ./ /var/www/exampleapp
WORKDIR /var/www/exampleapp
RUN npm install
RUN npm run build

CMD ["npm", "run", "start"]
