FROM node:18-alpine as build
WORKDIR /portfolio
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn next:build
RUN ls -la


FROM node:18-alpine
WORKDIR /portfolio
COPY --from=build /portfolio/package.json ./package.json
COPY --from=build /portfolio/node_modules ./node_modules
COPY --from=build /portfolio/.next ./.next
COPY --from=build /portfolio/public ./public
EXPOSE 3000
ENTRYPOINT ["yarn", "next:dev"]