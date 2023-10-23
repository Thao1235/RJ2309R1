import React from "react";

class Content extends React.Component{
    constructor(props){
        super(props)    
        this.state = {
            number: 1
        }
    }

    componentDidMount(){
        console.log('Content Component Did Mount');
    }

    componentDidUpdate(){
        console.log('Content Component did update - ${this.state.numer}');
    }

    componentWillUnmount(){
        console.log('Content Component will unmount');
    }

    handleIncreased = () => {
        this.setState ({
            ...this.state, 
            number: this.state.number + 1
        })
    }

    render(){
        return(
            <>
                <h1>Content - {this.state.number}</h1>
                <button onClick={this.handleIncreased}>Increased</button>
            </>
            
        )
    }
}

export default Content;