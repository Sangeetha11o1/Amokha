import React, { useEffect, useState } from 'react';
import client from '../client';
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [previousEvents, setPreviousEvents] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const today = new Date();

    client
      .fetch(
        `*[_type == "event"] | order(date desc) {
          title,
          date,
          "imageUrl": image.asset->url,
          slug
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
    setFade(true);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(false);
    }, 300);
  };

  const renderEvents = (events) => (
    events.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {events.map((event) => (
          event.slug && event.slug.current ? (
            <Link to={`/event/${event.slug.current}`} key={event.slug.current}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden flex flex-col">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full object-contain"
                />
                <div className="p-3 text-center">
                  <h3 className="text-base font-semibold" style={{ color: "#696969" }}>
                    {event.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#696969" }}>
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ) : null
        ))}
      </div>
    ) : (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-center text-sm" style={{ color: "#696969" }}>
          No events to display
        </p>
      </div>
    )
  );
  return (
    <main className="bg-blue-50 min-h-screen p-6 sm:p-10 md:p-12">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold cursive mb-8 text-center" style={{ color: "#696969" }}>
          Events
        </h1>

        <div className="flex justify-center mb-6 gap-4">
          <button
            className={`px-3 py-2 rounded-full text-xs md:text-sm ${activeTab === 'upcoming' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition`}
            onClick={() => handleTabClick('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            className={`px-3 py-2 rounded-full text-xs md:text-sm ${activeTab === 'previous' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition`}
            onClick={() => handleTabClick('previous')}
          >
            Previous Events
          </button>
        </div>

        <div className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          {activeTab === 'upcoming' ? renderEvents(upcomingEvents) : renderEvents(previousEvents)}
        </div>
      </div>
    </main>
  );
};

export default EventsPage;







