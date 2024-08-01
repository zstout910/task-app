import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input 
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
              <input 
                type="text" 
                value={item} 
                onChange={(e) => handleItemChange(index, e.target.value)} 
                required 
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={handleAddItem}>
          Add Item
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateForm;
