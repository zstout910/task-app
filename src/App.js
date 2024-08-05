import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  //for routing to contact page and task page
import './App.css';
import CreateForm from './CreateForm';
import Card from './Card';
import Navbar from './Navbar';
import Filter from './Filter';
import Footer from './Footer';
import Profile from './Profile';

function App() {
  const [showForm, setShowForm] = useState(false); //shows from after clicking create button
  const [cards, setCards] = useState([]); //for todo cards
  const [filter, setFilter] = useState('all');//for the filter to display current selected filter
  const [checkboxStates, setCheckboxStates] = useState({});//for the checkbox states

  const handleAddCard = (title, items) => { //function to add card to display
    const id = cards.length;
    setCards([...cards, { id, title, items }]);
  };

  const handleDeleteCard = (id) => {        //function to delete card from display
    setCards(cards.filter((card) => card.id !== id));
    const newCheckboxStates = { ...checkboxStates };    //delete checkbox state of deleted card
    delete newCheckboxStates[id];
    setCheckboxStates(newCheckboxStates);
  };

  const updateCheckboxState = (id, states) => {   //function to track checkboxes state
    setCheckboxStates({
      ...checkboxStates,
      [id]: states,
    });
  };

  const filteredCards = cards.filter((card) => {      //filters cards based on btn clicked for filter
    const states = checkboxStates[card.id] || [];
    const allChecked = states.every((state) => state);      //if all checkboxes are checked
    const someChecked = states.some((state) => state);      //if all checkboxes are not checked

    if (filter === 'all') return true;
    if (filter === 'completed') return allChecked;                      //testing if checkboxes are all checked to filter 
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
