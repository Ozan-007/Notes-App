import React, { useState,useEffect } from 'react'
import ListItems from '../components/ListItems'

const ListNotesPage = () => {
  
  let [notes, setNotes] = useState([])
  
  useEffect(() => {
    getNotes()
    }, [])
    
  const getNotes = async () => {
    let response = await fetch("/api/notes/")
    let data = await response.json()
    console.log(data)
    setNotes(data)
  }

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; My Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="list-notes">
        {notes.map(note =>
          <ListItems key={note.id} note={note} />
          )}
      </div>
    </div>
    )

}

export default ListNotesPage