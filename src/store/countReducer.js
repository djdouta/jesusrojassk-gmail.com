// Esto es un ejemplo de un reducer modificar a gusto

export const ADD = "ADD"

export const add = () => ({type : ADD })

const initState = { value : 0 }

export const countReducer = ( state = initState , action ) => {
  switch (action.type){
    case ADD:
      return {value : state.value + 1};
    default:
      return state
  }
}