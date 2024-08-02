import React, { useState, useDispatch } from 'react';
import './App.css';
import CreateForm from './CreateForm';
import Card from './Card';
import Navbar from './Navbar';
import Filter from './Filter';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);

  const handleAddCard = (title, items) => {
    setCards([...cards, { title, items }]);
  };

  return (
    <div className="App">
      <Navbar />
      <button className="create-btn" onClick={() => setShowForm(true)}>Create List</button>
      {showForm && <CreateForm onAddCard={handleAddCard} onClose={() => setShowForm(false)} />}
      <Filter/>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} items={card.items} />
        ))}
      </div>
    </div>
  );
}

export default App;
