import React from 'react';

function Timeline({ events }) {
  return (
    <ul className="timeline">
      {events.map((event, index) => (
        <li key={index}>
          <h5>{event.date}</h5>
          <p>{event.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Timeline;
