from pymongo import MongoClient
from core.config.settings import settings

client = MongoClient(settings.MONGODB_URL)
db = client["simulation"]


def get_agents():
    return list(db.agents.find({}))
