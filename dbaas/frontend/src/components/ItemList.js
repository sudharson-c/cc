// src/components/ItemList.js
import React from 'react';

const ItemList = ({ items, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Items List</h2>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
