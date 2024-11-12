# Etapa 1: Build
FROM node:18 AS build

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el package.json y el package-lock.json e instala las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código de la aplicación y construye la aplicación Angular
COPY . .
RUN npm run build --prod

# Etapa 2: Servidor
FROM nginx:alpine

# Copia los archivos generados en la etapa de build al servidor de Nginx
COPY --from=build /app/dist/tu-app-angular /usr/share/nginx/html

# Copia configuración personalizada de Nginx si es necesario
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 para el servidor Nginx
EXPOSE 80

# Inicia el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
