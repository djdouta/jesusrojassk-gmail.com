import React, { useState, useEffect } from "react";
import Template from "../containers/Template";
import QuestionContainer from "../containers/QuestionContainer";
import Question from "../components/test2/Question";
import IncrementButton from "../components/test2/IncrementButton";
import { connect } from "react-redux";

function Test2({ add, reduce, count }) {
  const [increment, setIncrement] = useState(1);
  const [automaticIncrease, setAutomaticIncrease] = useState(false);

  //
  useEffect(() => {
    automaticIncrease && handleCount(increment, true);
  });

  //Cambia el valor del incrementador dinamico
  const handleDinamicInput = event => {
    const value = event.currentTarget.value;
    setIncrement(value);
  };

  //Cambia el estado de incrementar atomatico
  const handleAutomaticIncrease = () => {
    setAutomaticIncrease(!automaticIncrease);
  };

  const handleCount = (time, increment) => {
    setTimeout(() => {
      increment ? add() : reduce();
    }, time * 1000);
  };

  return (
    <Template>
      <QuestionContainer title="Contador (Test 2)">
        <Question />
        <div className="col-6">
          <div className="input-group mb-3">
            <IncrementButton
              name={"-1"}
              seconds={increment}
              handleCount={() => handleCount(increment, false)}
            />
            <IncrementButton
              name={"-1"}
              seconds={null}
              handleCount={() => handleCount(0, false)}
            />
            <input
              type="number"
              className="form-control"
              readOnly
              value={count}
            />
            <IncrementButton
              name={"+1"}
              seconds={null}
              handleCount={() => handleCount(0, true)}
            />
            <IncrementButton
              name={"+1"}
              seconds={increment}
              handleCount={() => handleCount(increment, true)}
            />
          </div>
          <div className="d-inline-block">
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                checked={automaticIncrease}
                className="custom-control-input"
                id="autoAdd"
                onChange={handleAutomaticIncrease}
              />
              <label className="custom-control-label" htmlFor="autoAdd">
                Incrementar automáticamente
              </label>
            </div>
          </div>
          <div className="d-inline-block mx-2">cada</div>
          <div className="d-inline-block col-4">
            <div className="input-group mb-3">
              <input
                type="range"
                className="form-control"
                min="1"
                max="60"
                onChange={handleDinamicInput}
                value={increment}
              />
              <div className="input-group-append">
                <span className="input-group-text"> {`${increment} seg `}</span>
              </div>
            </div>
          </div>
        </div>
      </QuestionContainer>
    </Template>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    add: () => dispatch({ type: "ADD" }),
    reduce: () => dispatch({ type: "REDUCE" })
  };
};
export default connect(state => state, mapDispatchToProps)(Test2);
