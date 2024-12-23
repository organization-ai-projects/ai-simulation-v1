import ray


@ray.remote
class AgentActor:
    def __init__(self, agent_id, attributes):
        self.agent_id = agent_id
        self.attributes = attributes

    def update_attributes(self, updates: dict):
        self.attributes.update(updates)

    def get_status(self):
        return self.attributes
