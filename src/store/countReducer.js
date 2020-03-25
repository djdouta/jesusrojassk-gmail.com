// Esto es un ejemplo de un reducer modificar a gusto

// export const add = () => ({ type: ADD });

const initState = 0;

export const countReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "REDUCE":
      return state - 1;
    default:
      return state;
  }
};
