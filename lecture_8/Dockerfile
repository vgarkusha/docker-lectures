FROM node:20-bullseye AS runtime

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile
EXPOSE 3000

CMD ["npm", "run","dev"]