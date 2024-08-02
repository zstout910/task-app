import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Card({ title, items, handleDelete }) {
  return (
    <div className="card">
      
      <h3 className='title'>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li className="card-item" key={idx}><input type="checkbox"/> {item} </li>
        ))}
      </ul>
      <div className="card-bottom">
      <button className="edit-btn"><FontAwesomeIcon icon={ faTrash } /></button>
        </div>
    </div>
  );
}

export default Card;
