import React, { useState } from 'react';
import './Form.css';

function CreateForm({ onAddCard, onClose }) {   //function to create form for new list
  const [title, setTitle] = useState('');       //set title
  const [items, setItems] = useState(['']);     //set items

  const handleAddItem = () => {       //handles adding new items to list
    setItems([...items, '']);
  };

  const handleItemChange = (index, value) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {     //creates todo list when form is submitted
    e.preventDefault();
    onAddCard(title, items);
    setTitle('');
    setItems(['']);
    onClose();
  };                                //uses info entered by user

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
}                               //creates card for new list 

export default CreateForm;
