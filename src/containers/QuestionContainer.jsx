import React from "react";

export default function QuestionContainer(props) {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <div className="row my-2 justify-content-center">{props.children}</div>
    </React.Fragment>
  );
}
