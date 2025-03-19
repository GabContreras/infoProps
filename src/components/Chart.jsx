import React from 'react';

function Chart({ title, data }) {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.label}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Chart;
