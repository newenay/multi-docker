FROM node:14.14.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
# only change is dev/start (package.json)
CMD ["npm", "run", "start"]