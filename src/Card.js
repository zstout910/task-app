import React, { useState, useEffect } from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';    //font awesome for delete icon

function Card({ id, title, items, handleDelete, updateCheckboxState, initialCheckboxStates }) {     //sets up card funtion with card details
  const [checkboxStates, setCheckboxStates] = useState(initialCheckboxStates || items.map(() => false));

  useEffect(() => {
    updateCheckboxState(id, checkboxStates);            //for updating checkbox state
  }, [checkboxStates]);

  const handleCheckboxChange = (index) => {       
    const newStates = [...checkboxStates];        //updates checkbox state when changed
    newStates[index] = !newStates[index];
    setCheckboxStates(newStates);
  };

  const allChecked = checkboxStates.every((state) => state);    //if all checkboxes are checked

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
        <button className="edit-btn" onClick={() => handleDelete(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        {allChecked && <span className="completed-label">Completed</span>}
      </div>
    </div>
  );
}                                     //when all checkboxes are checked, creates complete label on card

export default Card;
