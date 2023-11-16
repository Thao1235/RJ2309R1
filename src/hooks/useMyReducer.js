import { useState } from "react";
const useMyReducer = (reducer, initState) => {
    const [state, setState] = useState(initState)

    const dispatch = (action) => {
        let newState = reducer(state,action)
        setState(newState)
    }
    return [
        state,
        dispatch
    ]
}

export default useMyReducer;