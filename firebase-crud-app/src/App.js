import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase-config';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingNote, setEditingNote] = useState('');

  const notesCollectionRef = collection(db, 'notes');

  // Fetch notes from Firestore
  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotes();
  }, []);

  // Add a new note
  const addNote = async () => {
    if (newNote.trim() === '') return;
    await addDoc(notesCollectionRef, { text: newNote });
    setNewNote('');
    window.location.reload(); // Refresh to show the new note
  };

  // Update a note
  const updateNote = async (id) => {
    const noteDoc = doc(db, 'notes', id);
    await updateDoc(noteDoc, { text: editingNote });
    setEditingId(null);
    setEditingNote('');
    window.location.reload(); // Refresh to show the updated note
  };

  // Delete a note
  const deleteNote = async (id) => {
    const noteDoc = doc(db, 'notes', id);
    await deleteDoc(noteDoc);
    window.location.reload(); // Refresh to show remaining notes
  };

  return (
    <div className="App">
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Add a note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {editingId === note.id ? (
              <>
                <input
                  type="text"
                  value={editingNote}
                  onChange={(e) => setEditingNote(e.target.value)}
                />
                <button onClick={() => updateNote(note.id)}>Update</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{note.text}</span>
                <button onClick={() => {
                  setEditingId(note.id);
                  setEditingNote(note.text);
                }}>Edit</button>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
