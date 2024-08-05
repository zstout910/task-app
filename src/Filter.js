import React from 'react';
import './Filter.css';

const Filter = ({ setFilter }) => {     //filter btns for the filtering
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
};                                              //sets filter to selected filter

export default Filter;
