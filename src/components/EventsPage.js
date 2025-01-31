// src/pages/EventsPage.js
import React, { useEffect, useState } from 'react';
import client from '../client';
import './EventsPage.css';

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming'); // Control active tab
  const [fade, setFade] = useState(false); // Control animation

  useEffect(() => {
    const today = new Date();

    client
      .fetch(
        `*[_type == "event"] | order(date desc) {
          title,
          date,
          description,
          "imageUrl": image.asset->url,
          link
        }`
      )
      .then((data) => {
        const upcoming = data.filter((event) => new Date(event.date) >= today);
        const previous = data.filter((event) => new Date(event.date) < today);
        setUpcomingEvents(upcoming);
        setPreviousEvents(previous);
      })
      .catch(console.error);
  }, []);

  const handleTabClick = (tab) => {
    setFade(true); // Start fade-out animation
    setTimeout(() => {
      setActiveTab(tab);
      setFade(false); // Fade-in animation after tab change
    }, 300);
  };

  const renderEvents = (events) => (
    <div className="events-list">
      {events.length > 0 ? (
        events.map((event) => (
          <div className="event-card" key={event.title}>
            <img src={event.imageUrl} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p>{new Date(event.date).toLocaleDateString()}</p>
            <p>{event.description}</p>
            {event.link && (
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                View Event
              </a>
            )}
          </div>
        ))
      ) : (
        <p className='cursive center'>No events to display</p>
      )}
    </div>
  );

  return (
    <div className="events-page cursive">
      <h1>Events</h1>
      
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'upcoming' ? 'active' : ''}`}
          onClick={() => handleTabClick('upcoming')}
        >
          Upcoming Events
        </button>
        <button
          className={`tab ${activeTab === 'previous' ? 'active' : ''}`}
          onClick={() => handleTabClick('previous')}
        >
          Previous Events
        </button>
      </div>

      <div className={`events-container ${fade ? 'fade' : ''}`}>
        {activeTab === 'upcoming' ? renderEvents(upcomingEvents) : renderEvents(previousEvents)}
      </div>
    </div>
  );
};

export default EventsPage;
