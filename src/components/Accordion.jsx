import React, { useState } from 'react';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index}>
          <button className="btn btn-link" onClick={() => toggleAccordion(index)}>
            {item.title}
          </button>
          {activeIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
