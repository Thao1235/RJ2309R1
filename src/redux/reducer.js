import { FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./action";

const initState = {
    user: [],
    userlogined: {}
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                userlogined: action.payload
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users: action.payload
        }
        default:
            return state;
    }
}
export default rootReducer;