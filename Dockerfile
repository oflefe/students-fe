FROM node:16

WORKDIR /students-fe

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]