FROM node:6

# install deps
RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]
