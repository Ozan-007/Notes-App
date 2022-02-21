import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{note.body}</h3> {/*  .substr() might be useful for longer notes. */} 
      </div>
    </Link>
  );
};

export default ListItems;
