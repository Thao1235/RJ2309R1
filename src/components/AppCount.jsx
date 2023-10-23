import React from "react";
import Content from "./Content";

class AppCount extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            number : 10,
            showContent: false
        };
    }

    handleDecreased = () => {
        this.setState ({
            ...this.state, 
            number: this.state.number - 1
        })
    }

    

    handleToggleContent = () => {
        this.setState({
            ...this.state,
            showContent: !this.state.showContent
        })
    }
    render(){
        return(
            <>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleDecreased}>Decreased</button>
                <button onClick={this.handleIncreased}>Increased</button>
                <br/>
                <button
                    onClick={this.handleToggleContent}
                >Toggle Content Component</button>
                {
                    this.state.showContent && <Content/>
                }
            </>

        )
    }
}

export default AppCount;