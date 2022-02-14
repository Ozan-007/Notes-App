import React, { useState,useEffect } from 'react'

const ListNotesPage = () => {
  
  let [notes, setNotes] = useState([])
  
  useEffect(() => {
    getNotes()
    }, [])
    
  const getNotes = async () => {
    let response = await fetch("http://localhost:8000/api/notes/")
    let data = await response.json()
    console.log(data)
    setNotes(data)
  }

  return (
    <div>
      <div className="list">
        {notes.map(note => <h3 key={note.id}>{note.body}</h3> )}
      </div>
    </div>
    )

}

export default ListNotesPage