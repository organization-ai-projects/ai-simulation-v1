import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    POSTGRES_URL: str = os.getenv(
        "POSTGRES_URL", "postgresql://user:password@localhost/db_name"
    )
    MONGODB_URL: str = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
    RABBITMQ_URL: str = os.getenv("RABBITMQ_URL", "amqp://guest:guest@localhost/")
    RAY_HEAD: str = os.getenv("RAY_HEAD", "127.0.0.1:6379")
    PROMETHEUS_PORT: int = int(os.getenv("PROMETHEUS_PORT", "9090"))
    DEBUG: bool = os.getenv("DEBUG", "false").lower() in ("true", "1")


settings = Settings()
