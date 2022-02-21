import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  let noteId = useParams();

  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId.id]);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId.id}`);
    let data = await response.json();
    setNote(data);
  };

  let handleChange = async () => {
      await fetch(`/api/notes/${noteId.id}/update`,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note)
  })
};




  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <div >
            <ArrowLeft onClick={handleChange} />
            </div>
          </Link>
        </h3>
      </div>
      <textarea onChange={e => setNote({...note,'body':e.target.value})} defaultValue={note?.body} ></textarea>
      {/* spread operator for objects, we can use them to change the specific parts of an object */}
    </div>
  );
};

export default NotePage;
