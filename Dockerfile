FROM node:20-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]
RUN npm ci

COPY . .

ENV NODE_ENV=production
 
RUN npm run render:build --if-present
RUN npm prune --omit=dev