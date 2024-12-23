# Étape 1 : Construire l'application avec Node.js
FROM node:18-alpine AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et yarn.lock
COPY package.json yarn.lock ./

# Installer les dépendances
RUN yarn install --frozen-lockfile

# Copier le reste du code source
COPY . .

# Construire le projet pour la production
RUN yarn build && yarn cache clean

# Étape 2 : Utiliser Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape précédente
COPY --from=build /app/build /usr/share/nginx/html

# Ajouter un fichier de configuration Nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port pour Nginx
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
