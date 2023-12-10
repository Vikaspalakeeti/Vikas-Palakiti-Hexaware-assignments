import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/models/todo.model";
import { addTodo, removeTodo, toggleTodo } from "../actions/todo.action";

export interface TodoState{

    todos:Todo[];
}

export const initialState: TodoState={

    todos:[
        {
            id:'1',
            title:'Todo1',
            completed:false,
            userId:101
        }
    ]
}

export const todosReducer = createReducer(
    initialState,
    on(addTodo,(state,{todo})=>({

        ...state,
        todos:[...state.todos,todo]

    })), 
    on(removeTodo,(state,{id})=>({
        
        ...state,
        todos:state.todos.filter((todo)=>{todo.id!=id})
    
    })), 

    on(toggleTodo,(state,{id})=>({
        ))


);
 
