FROM node:16-alpine

LABEL maintainer="bakduo"

# Set to a non-root built-in user `node`
USER node

# Create app directory (with user `node`)
RUN mkdir -p /home/node/app && mkdir /home/node/app/public && mkdir /home/node/app/config && mkdir /home/node/app/log

WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY --chown=node package*.json ./

RUN NODE_ENV=production npm ci && npm install

# Bundle app source code
COPY --chown=node . .

RUN npm run build

# Bind to all network interfaces so that it can be mapped to the host OS

ENV HOST=0.0.0.0 PORT=8080

VOLUME [ "config/","public/","log/"]

EXPOSE ${PORT}

CMD [ "npm", "run", "start:pm2docker" ]
