import React from 'react'
import './TodoItem.css';
export function TodoItem({todo}) {

  return (
      <li>
          <span>{todo.description}</span>
          <button>Borrar</button>
      </li>
  )
}


