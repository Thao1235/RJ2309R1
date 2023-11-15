import React, { useReducer } from "react";
import { initState, reducer } from "../reducer/reducer";

function TodoApp(){
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)
    return(
        <></>  
    )
}

export default TodoApp;