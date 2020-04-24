# The minimum environment (Node, php, etc...)
FROM node:9.2.0-alpine

# Use RUN to execute classic command as mkdir, cd, etc...
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app
COPY ./package.json /usr/src/app/
RUN npm install -g
COPY . /usr/src/app/
# Use EXPOSE to open a port to the Docker machine, for example 80, 4242, etc...
EXPOSE 8080

# The ENTRYPOINT & CMD let you tell to Docker what to do when the container is mounted
ENTRYPOINT [ "npm", "run", "development" ]