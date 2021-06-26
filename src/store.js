import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// const initialState = {
//   groceries: [],
//   view: ''
// };

const groceriesReducer = (state = [], action) => {
  if (action.type === "LOAD") {
    return action.groceries;
  }
  if (action.type === "UPDATE") {
    return state.groceries.map( grocery =>
      grocery.id === action.grocery.id ? action.grocery : grocery
    );
  }
  if (action.type === "CREATE") {
    return (state = {
      ...state,
      groceries: [...state.groceries, action.grocery],
    });
  }
  return state;
};
const viewReducer = (state = "", action) => {
  if (action.type === "SET_VIEW") {
    return action.view;
  }
  return state;
};
const reducer = combineReducers({
  groceries: groceriesReducer,
  view: viewReducer,
});

const store = createStore(reducer);

export default store;

