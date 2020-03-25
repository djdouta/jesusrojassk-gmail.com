import React, { useState } from "react";
import Template from "../containers/Template";
import QuestionContainer from "../containers/QuestionContainer";
import Question from "../components/test1/Question";
import ListElement from "../components/test1/ListElement";
import { connect } from "react-redux";

//He uilizado useState porque tanto redux como hooks eran requeridos, si hay una razón por cual lo hice así.
export function Test1({ addList, list, deleteList }) {
  const [name, setName] = useState("");

  //Funcion controladora del cambio de estado "Name"
  const handleChangeName = ({ target }) => {
    setName(target.value);
  };

  //Funcion para agregar elementos en la lista
  const handleAddList = () => {
    if (name.length > 0) {
      addList(name);
      setName("");
    } else {
      alert("El campo name no puede estar vacio");
    }
  };

  //Funcion para eliminar elementos de la lista.
  const handleDeleteList = event => {
    const index = parseInt(event.currentTarget.dataset.index);
    deleteList(index);
  };

  return (
    <Template>
      <QuestionContainer title="Administrador de tareas (Test 1)">
        <Question />
        <div className="col-6">
          <div className="input-group mb-3">
            <input
              type="text"
              onChange={handleChangeName}
              className="form-control"
              value={name}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                onClick={handleAddList}
              >
                Agregar
              </button>
            </div>
          </div>
          <ul className="list-group">
            {list.length > 0 &&
              list.map((element, index) => {
                return (
                  <ListElement
                    className="Lista"
                    key={index}
                    id={index}
                    name={element}
                    handleDeleteList={handleDeleteList}
                  />
                );
              })}
          </ul>
        </div>
      </QuestionContainer>
    </Template>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addList: data => dispatch({ type: "ADDLIST", data }),
    deleteList: data => dispatch({ type: "DELETELIST", data })
  };
};
export default connect(state => state, mapDispatchToProps)(Test1);
