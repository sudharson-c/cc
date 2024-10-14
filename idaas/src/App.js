import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleUpdate = (index, updatedItem) => {
    const updatedItems = items.map((item, i) =>
      i === index ? updatedItem : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <h2>Welcome, {user.name}</h2>
            <button onClick={() => logout({ returnTo: window.location.origin })}>
              Logout
            </button>
            <div>
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add a new item"
              />
              <button onClick={handleAdd}>Add</button>
            </div>
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleUpdate(index, e.target.value)}
                  />
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>Login</button>
        )}
      </header>
    </div>
  );
}

export default App;
