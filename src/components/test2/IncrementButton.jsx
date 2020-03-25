import React from "react";

export default function IncrementalButton({ name, seconds, handleCount }) {
  return (
    <button
      onClick={handleCount}
      className="btn btn-outline-primary"
      type="button"
    >
      {seconds !== null ? ` ${name} (${seconds} seg)` : name}
    </button>
  );
}
