FROM node:16

WORKDIR /f7b3_team04_client/
COPY . /f7b3_team04_client/
COPY ./package.json /f7b3_team04_client/
COPY ./yarn.lock /f7b3_team04_client/

RUN yarn install
RUN yarn build
CMD yarn start