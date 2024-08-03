import React, { useState, useEffect } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Card({ id, title, items, handleDelete, updateCheckboxState, initialCheckboxStates }) {
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxStates || items.map(() => false));

  useEffect(() => {
    updateCheckboxState(id, checkboxStates);
  }, [checkboxStates]);

  const handleCheckboxChange = (index) => {
    const newStates = [...checkboxStates];
    newStates[index] = !newStates[index];
    setCheckboxStates(newStates);
  };

  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li className="card-item" key={idx}>
            <input
              type="checkbox"
              checked={checkboxStates[idx]}
              onChange={() => handleCheckboxChange(idx)}
            />{' '}
            {item}
          </li>
        ))}
      </ul>
      <div className="card-bottom">
        <button className="edit-btn">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}

export default Card;
