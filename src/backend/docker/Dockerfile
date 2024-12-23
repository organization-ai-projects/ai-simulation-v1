# Étape 1 : Base commune
FROM python:3.10-slim AS base

# Répertoire de travail
WORKDIR /app

# Installer les dépendances principales
COPY ../requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Étape 2 : Environnement de tests
FROM base AS testing

# Ajouter les dépendances spécifiques aux tests
COPY ../requirements-test.txt .
RUN pip install --no-cache-dir -r requirements-test.txt

# Copier le code source et les tests
COPY .. .

# Configurer le chemin pour les tests
ENV PYTHONPATH=/app

# Commande pour exécuter les tests
CMD ["pytest", "--maxfail=5", "--disable-warnings", "tests"]

# Étape 3 : Environnement de production
FROM base AS production

# Copier uniquement le code source nécessaire
COPY .. .

# Commande pour exécuter le serveur FastAPI
CMD ["uvicorn", "gateway.app:app", "--host", "0.0.0.0", "--port", "8000"]
