import {TOGGLE_TRUE,TOGGLE_FALSE } from "../constants/driver"

const initialState = {
  edit: false,
}
const editReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_TRUE:
      return { ...state, edit: true };

    case TOGGLE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};
export default editReducer 