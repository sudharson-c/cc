// src/components/ItemForm.js
import React, { useState, useEffect } from 'react';

const ItemForm = ({ onSubmit, editItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setDescription(editItem.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <div>
      <h2>{editItem ? 'Edit Item' : 'Add Item'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item Name"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item Description"
          required
        />
        <button type="submit">{editItem ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default ItemForm;
