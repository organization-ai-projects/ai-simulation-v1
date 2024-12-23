from kombu import Connection, Exchange, Queue, Producer, Consumer
from core.config.settings import settings


class EventBus:
    def __init__(self):
        self.connection = Connection(settings.RABBITMQ_URL)
        self.exchange = Exchange("simulation_events", type="topic")
        self.queues = {}

    def declare_queue(self, name: str, routing_key: str):
        queue = Queue(name, exchange=self.exchange, routing_key=routing_key)
        queue.declare(self.connection)
        self.queues[name] = queue

    def publish(self, routing_key: str, message: dict):
        with Producer(self.connection) as producer:
            producer.publish(
                message,
                exchange=self.exchange,
                routing_key=routing_key,
                serializer="json",
            )

    def consume(self, queue_name: str, callback):
        queue = self.queues.get(queue_name)
        if queue:
            with Consumer(self.connection, queues=[queue], callbacks=[callback]):
                while True:
                    self.connection.drain_events()


event_bus = EventBus()
