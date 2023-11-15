// initState
export const initState = {
    balance: 0,
    amount: 0
}

// reducer
export const reducer = (state, action) => {
    switch(action.type) {
        case 'bank/deposit': {
            return {
                ...state,
                balance: state.balance + state.amount,
                amount: 0
            }
        }
        case 'bank/withdraw': {
            return {
                ...state,
                balance: state.balance - state.amount,
                amount: 0
            }
        }
        case 'bank/inputamount': {
            return {
                ...state,
                amount: Number(action.payload)
            }
        }
        default: {
            return state
        }
    }
}