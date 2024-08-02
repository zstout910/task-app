import React, { useState } from 'react';
import './Form.css';

function CreateForm({ onAddCard, onClose }) {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState(['']);

  const handleAddItem = () => {
    setItems([...items, '']);
  };

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(title, items);
    setTitle('');
    setItems(['']);
    onClose();
  };

  return (
    <div className="form-container">
    <form className="form-section" onSubmit={handleSubmit}>
      <div>
        <label>
         Name:
          <input className='title-text' 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </label>
      </div>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <label>
              Item {index + 1}:
              <input className='item-text' 
                type="text" 
                value={item} 
                onChange={(e) => handleItemChange(index, e.target.value)} 
                required 
              />
            </label>
          </div>
        ))}
        <button className='add-btn' type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <button className='submit-btn' type="submit">Create</button>
    </form>
    </div>
  );
}

export default CreateForm;
