import React from "react";
import './TodoReducer.css';
export function TodoReducer(initialState = [], action) {
  switch (action.type) {
    case "[TODO] ADD TODO":
      return [...initialState, action.payload];
    default:
      return initialState;
  }
}
