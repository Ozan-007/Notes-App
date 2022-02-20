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

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
