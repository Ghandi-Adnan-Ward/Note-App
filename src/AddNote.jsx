import React, { useState } from 'react'
import PrioritySelect from './PrioritySelect'

const AddNote = ({onAddNote}) => {
    const [noteInput, setNoteInput] = useState("");
    const [priority, setPriority] = useState("low");
    const handleAdd = () => {
        if (noteInput.trim() === "") return;
        onAddNote(noteInput.trim(), priority);
        setNoteInput("");
        setPriority("low");
      };
    return (
    <div className="inputRow">
    <textarea
      placeholder="اكتب ملاحظتك هنا..."
      value={noteInput}
      onChange={(e) => setNoteInput(e.target.value)}
      className="textarea"
      rows={3}
    />
   
    <PrioritySelect value={priority} onChange={setPriority} />

    <button onClick={handleAdd} className="btn">
      ➕ إضافة
    </button>
  </div>
)
}

export default AddNote