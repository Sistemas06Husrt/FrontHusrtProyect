# Etapa 1: Construcción de la aplicación
FROM node:20.17.0 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build 

# Etapa 2: Servir la aplicación
FROM nginx:alpine

COPY --from=build /app/dist/front-proyect-husrt /usr/share/nginx/html

EXPOSE 8081

CMD ["nginx", "-g", "daemon off;"]