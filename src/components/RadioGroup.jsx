import React from "react";

class RadioGroup extends React.Component{
    constructor(props){
        super (props)
        this.state = {
            selected: '',
            hobbies: ["Football", "Swimming", "Walking"]
        }
    }

handleChangeHobby = (e) => {
        this.setState({
            ...this.state,
            selected: e.target.value
        })
}

render(){
    return(
        <>
            <h1>Please choose hobby</h1>
            {
                this.state.hobbies.map((hobby) => (
                    <div key={hobby}>
                        <label>
                            <input type="radio" name="hobby" value="hobby"
                                checked={this.state.selected === hobby}
                                onClick={this.handleChangeHobby}
                            />
                            {hobby}
                        </label>
                    </div>
                ))

            }
        </>
    )
}
}

export default RadioGroup;