import { useReducer } from "react";
import { createContext } from "react";
import reducer, { initState } from "../reducer/reducer";


export const ShoeContext = createContext();

function ShoeProvider({ children }){
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state);
    return(
        <ShoeContext.Provider value={{state, dispatch}}>
            { children }
        </ShoeContext.Provider>
    )
}
export default ShoeProvider;