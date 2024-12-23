from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from core.config.settings import settings

# Configuration de SQLAlchemy
engine = create_engine(settings.DATABASE_URL, echo=settings.DEBUG)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
