import React from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

const Events: React.FC = () => {
  const [events, setEvents] = React.useState<Event[]>([]);

  return (
    <div className="events-container">
      <h1>Événements</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
