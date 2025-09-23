import React, { useState, useEffect } from "react";
import "./NotesApp.css";
import PrioritySelect from './PrioritySelect'; // في أعلى الملف

import NoteList from "./NoteList ";
import AddNote from "./AddNote";
import Filters from "./Filters";

function NotesApp() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text,priority) => {
    const newNote = {
      id: Date.now(),
      text,
      createdAt: Date.now(),
      priority,
      completed: false,
      favorite:false
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleComplete = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  const startEditing = (note) => {
    setEditingId(note.id);
    setEditedText(note.text);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedText("");
  };

  
  const saveEditedNote = () => {
    if (editedText.trim() === "") return;
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === editingId ? { ...note, text: editedText.trim() } : note
      )
    );
    cancelEditing();
  };

  const filteredNotes = notes
    .filter((note) => {
      if (filterStatus === "completed") return note.completed;
      if (filterStatus === "active") return !note.completed;
      return true;
    })
    .filter((note) =>
      note.text.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? b.createdAt - a.createdAt
        : a.createdAt - b.createdAt
    );

  return (
    <div className="container">
      <h2 className="title">📝 تطبيق الملاحظات</h2>

     <AddNote     onAddNote={addNote}/>

    <Filters
     filterStatus={filterStatus}
     setFilterStatus={setFilterStatus}
     sortOrder={sortOrder}
     setSortOrder={setSortOrder}
     searchQuery={searchQuery}
     setSearchQuery={setSearchQuery}
      />
      
      {filteredNotes.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: 20 }}>
          لا توجد ملاحظات مطابقة.
        </p>
      ) : (
        <div className="grid">
          {filteredNotes.map((note,id) => (
           <NoteList 
           key={id}
            note={note}
            deleteNote={deleteNote}
            editingId={editingId} 
            editedText={editedText} 
            saveEditedNote={saveEditedNote} 
            setEditedText={setEditedText} 
            startEditing={startEditing} 
            cancelEditing={cancelEditing}
            toggleComplete={toggleComplete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NotesApp;
