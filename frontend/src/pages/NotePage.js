import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const NotePage = () => {

  let noteId = useParams()

  let [note, setNote] = useState(null)


  useEffect(() => {
    getNote()
  },[])
  
  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId.id}`)
    let data = await response.json()
    setNote(data)
  }
  
  

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  )
}

export default NotePage