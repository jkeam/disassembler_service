FROM node:6

# install deps
RUN npm install

EXPOSE 8000 8080
CMD [ "npm", "start" ]
