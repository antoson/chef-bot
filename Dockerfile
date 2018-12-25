FROM node:current-alpine
# Create app directory and switch to it
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot
# Copy and install npm packages
COPY package.json /usr/src/bot
RUN npm install
# Copy app source files
COPY . /usr/src/bot
CMD ["node","index.js"]