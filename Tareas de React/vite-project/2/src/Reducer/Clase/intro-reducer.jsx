import {useReducer} from 'react'
import {TareaReducer} from '../TareaReducer'



const initialCase=[{
    id: new Date().getTime(),
    description: 'Hacer los challenges',
    done: false
}]

export const TodoApp=()=>{
    const [todos, dispatchTodo]=useReducer(TareaReducer,initialCase)

    return
    <>
    <h1>TodoApp</h1>
    <hr />
    
    </>

}