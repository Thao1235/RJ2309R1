import React from "react";

function AppCountJS(){
    const handleIncrement = () => {
        document.getElementById("number").innerText = 
        Number(document.getElementById("number").innerText) + 1
    }
    return(
        <div>
            <h1 id="number">0</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default AppCountJS;
