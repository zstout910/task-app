import React from 'react';
import './Filter.css';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter-section">
      <button className="filter-btn" onClick={() => setFilter('all')}>
        All
      </button>
      <button className="filter-btn" onClick={() => setFilter('uncompleted')}>
        Uncompleted
      </button>
      <button className="filter-btn" onClick={() => setFilter('completed')}>
        Completed
      </button>
    </div>
  );
};

export default Filter;
