import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function Card({ title, items, handleDelete }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {items.map((item, idx) => (
          <li className="card-item" key={idx}><input type="checkbox"/> {item} <button className="edit-btn"><FontAwesomeIcon icon={faPenToSquare} /></button></li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
