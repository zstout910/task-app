import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateForm from './CreateForm';
import Card from './Card';
import Navbar from './Navbar';
import Filter from './Filter';
import Footer from './Footer';
import Profile from './Profile';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('all');
  const [checkboxStates, setCheckboxStates] = useState({});

  const handleAddCard = (title, items) => {
    const id = cards.length;
    setCards([...cards, { id, title, items }]);
  };

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
    const newCheckboxStates = { ...checkboxStates };
    delete newCheckboxStates[id];
    setCheckboxStates(newCheckboxStates);
  };

  const updateCheckboxState = (id, states) => {
    setCheckboxStates({
      ...checkboxStates,
      [id]: states,
    });
  };

  const filteredCards = cards.filter((card) => {
    const states = checkboxStates[card.id] || [];
    const allChecked = states.every((state) => state);
    const someChecked = states.some((state) => state);

    if (filter === 'all') return true;
    if (filter === 'completed') return allChecked;
    if (filter === 'uncompleted') return !allChecked || !someChecked;

    return true;
  });

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <button className="create-btn" onClick={() => setShowForm(true)}>
                Create List
              </button>
              {showForm && (
                <CreateForm onAddCard={handleAddCard} onClose={() => setShowForm(false)} />
              )}
              <Filter setFilter={setFilter} />
              <div className="cards-container">
                {filteredCards.map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    items={card.items}
                    updateCheckboxState={updateCheckboxState}
                    initialCheckboxStates={checkboxStates[card.id]}
                    handleDelete={handleDeleteCard}
                  />
                ))}
              </div>
            </>
          } />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
