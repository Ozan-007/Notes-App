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
    <div>
      <div className="list">
        {notes.map(note =>
          <ListItems key={note.id} note={note} />
          )}
      </div>
    </div>
    )

}

export default ListNotesPage