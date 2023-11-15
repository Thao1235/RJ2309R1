import React, { useReducer } from "react";
import { initState, reducer } from "../reducer/reducer";
import { inputAmount, deposit, withDraw } from "../reducer/action";

function BankApp(){
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)

    const handleInputAmount = (e) => {
        dispatch(inputAmount(e.target.value))
    }
    const handleDeposit = () => {
        dispatch(deposit())
    }
    const handleWithDraw = () => {
        dispatch(withDraw())
    }
    return(
        <div>
            <h3 className="text-danger">ATM</h3>
            <div>
                <h2>Balance: {state.balance} đ</h2>
            </div>
            <form>
                <div className="form-group mb-2">
                    <label>Amount</label>
                    <input type="text" className="form-control"
                        value={state.amount}
                        onInput={handleInputAmount}
                    />
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-warning me-2"
                        onClick={handleDeposit}
                    >Deposit</button>
                    <button type="button" className="btn btn-success"
                        onClick={handleWithDraw}
                    >WithDraw</button>

                </div>
            </form>
        </div>
    )
}

export default BankApp;