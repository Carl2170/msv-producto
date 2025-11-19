FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar solo dependencias de producción
RUN npm install --production

# Copiar todo el código de la app
COPY . .

# Exponer el puerto que usa la app
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "src/server.js"]
