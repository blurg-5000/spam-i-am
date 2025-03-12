FROM node:20-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ENV NODE_ENV=production
# Initial deploy 
# RUN npm run render:build --if-present
# After creating the pg database on render - run this one time
RUN npm run render:build && NODE_ENV='production' npm run knex seed:run
RUN npm prune --omit=dev