from core.bus.event_bus import event_bus


def log_event(data: dict):
    print(f"Event logged: {data}")


# Exemple d'abonnement à un événement
event_bus.subscribe("agent_created", log_event)
