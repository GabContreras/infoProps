import React from 'react';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://static.wikia.nocookie.net/a-bag-of-milk/images/c/c2/Milk_1_header.webp/revision/latest?cb=20230418185149" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://static.wikia.nocookie.net/a-bag-of-milk/images/c/c2/Milk_1_header.webp/revision/latest?cb=20230418185149" className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
