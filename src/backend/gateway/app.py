from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

# Initialisation de l'application FastAPI
app = FastAPI(
    title="Simulation AI API",
    description="Backend pour le projet Simulation AI",
    version="1.0.0",
)

# Configuration CORS
origins = [
    "http://localhost:3000",  # Frontend local
    "http://127.0.0.1:3000",  # Alternative pour localhost
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Exemple de route basique
@app.get("/")
async def root():
    return {"message": "Bienvenue dans l'API Simulation AI"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
