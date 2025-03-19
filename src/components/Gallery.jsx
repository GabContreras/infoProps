import React from 'react';

function Gallery({ images }) {
  return (
    <div className="row">
      {images.map((image, index) => (
        <div key={index} className="col-4 mb-4">
          <img src={image.src} alt={image.alt} className="img-fluid" />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
