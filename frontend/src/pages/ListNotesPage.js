import React, { useState,useEffect } from 'react'

const ListNotesPage = () => {
  
  let [notes, setNotes] = useState([])
  
  useEffect(() => {
    getNotes()
    }, [])
    
  const getNotes = async () => {
    let response = await fetch("http://localhost:8000/api/notes/")
    let data = await response.json()
    console.log(notes)
    setNotes(data)
  }

  return (
    <div>NOTES</div>
    )

}

export default ListNotesPage