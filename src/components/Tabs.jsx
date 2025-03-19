import React, { useState } from 'react';

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => (
          <li key={index} className="nav-item">
            <button
              className={`nav-link ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content p-3">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
