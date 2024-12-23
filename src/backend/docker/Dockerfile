# # Utiliser une image Python officielle
# FROM python:3.10-slim

# # Définir le répertoire de travail
# WORKDIR /app

# # Copier et installer les dépendances
# COPY ../../requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# # Copier tout le code source
# COPY ../../ .

# # Exposer le port pour le backend
# EXPOSE 8000

# # Lancer le serveur FastAPI
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# Étape 1 : Utiliser une image Python officielle
FROM python:3.10-slim

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier de dépendances
COPY ./requirements.txt ./requirements.txt

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Copier tout le code source
COPY ./ ./src

# Configurer le PYTHONPATH pour inclure le dossier `src`
ENV PYTHONPATH=/app/src

# Exposer le port pour le backend
EXPOSE 8000

# Lancer le serveur FastAPI
CMD ["uvicorn", "gateway.app:app", "--host", "0.0.0.0", "--port", "8000"]
