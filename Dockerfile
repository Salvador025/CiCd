# Etapa única: Construcción y servicio de la aplicación Angular
FROM node:20-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de la aplicación
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación en modo producción
RUN npm run build --prod

# Instala http-server globalmente
RUN npm install -g http-server

# Establece el directorio de trabajo en el directorio de construcción
WORKDIR /app/dist/input-output

# Expone el puerto 8080
EXPOSE 8080

# Comando por defecto para iniciar http-server
CMD ["http-server", "-p", "8080"]
