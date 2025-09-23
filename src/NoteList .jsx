import React from 'react'

const NoteList  = ({note,editingId,editedText,saveEditedNote,setEditedText,cancelEditing,toggleComplete,startEditing,deleteNote}) => {
  return (
    <div key={note.id} className="noteCard">
    {editingId === note.id ? (
      <>
        <textarea
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          rows={3}
          className="textarea"
        />
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          <button onClick={saveEditedNote} className="btn">
            ✅ حفظ
          </button>
          <button onClick={cancelEditing} className="deleteBtn">
            ↩️ إلغاء
          </button>
        </div>
      </>
    ) : (
      <>
        <p
          className="noteText"
          style={{
            textDecoration: note.completed ? "line-through" : "none",
          }}
        >
          {note.text}
        </p>
        <p>
          🎯 الأولوية:{" "}
          <strong
            style={{
              color:
                note.priority === "high"
                  ? "red"
                  : note.priority === "medium"
                  ? "orange"
                  : "green",
            }}
          >
            {note.priority === "high"
              ? "عالية"
              : note.priority === "medium"
              ? "متوسطة"
              : "منخفضة"}
          </strong>
        </p>
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <button onClick={() => toggleComplete(note.id)} className="btn">
            {note.completed ? "✅ مكتملة" : "⭕ غير مكتملة"}
          </button>
          <button onClick={() => startEditing(note)} className="btn">
            ✏️ تعديل
          </button>
          <button onClick={() => deleteNote(note.id)} className="deleteBtn">
            🗑️ حذف
          </button>
        </div>
      </>
    )}
  </div>
)
}

export default NoteList 