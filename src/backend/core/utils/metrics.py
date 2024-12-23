from prometheus_client import Counter, Histogram, start_http_server

# Compteurs pour les événements
agent_created = Counter("agent_created", "Nombre d'agents créés")
agent_died = Counter("agent_died", "Nombre d'agents morts")

# Temps d'exécution pour les fonctions
request_latency = Histogram("request_latency", "Temps de traitement des requêtes")


def start_metrics_server(port=9090):
    start_http_server(port)
