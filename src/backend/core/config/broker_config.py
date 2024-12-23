from kombu import Connection
from core.config.settings import settings

# Configuration du broker
broker_connection = Connection(settings.BROKER_URL)
