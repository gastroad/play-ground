FROM node:latest as builder
WORKDIR /usr/src/app
COPY package.json  ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest 
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=build /usr/src/app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80

