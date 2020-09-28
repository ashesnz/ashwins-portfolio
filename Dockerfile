FROM node:10-alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
EXPOSE 3000
COPY --from=0 /app/build /usr/share/nginx/html
# if you are using react router
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY src/nginx/nginx.conf /etc/nginx/conf.d