import React from "react";

export default function ListElement({ name, id, handleDeleteList }) {
  return (
    <li className="list-group-item">
      {`${id + 1} ${name}`}
      <button
        onClick={handleDeleteList}
        className="float-right btn btn-link text-danger"
        data-index={id}
      >
        &times;
      </button>
    </li>
  );
}
