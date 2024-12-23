from sqlalchemy.orm import Session
from core.config.database_config import SessionLocal
from services.agents.repositories.agent_repository import AgentRepository


def create_agent(agent_data: dict):
    with SessionLocal() as db:
        repository = AgentRepository(db)
        return repository.create_agent(agent_data)
