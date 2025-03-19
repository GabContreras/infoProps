import React, { useState } from 'react';

function Rating({ maxStars }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => setRating(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
