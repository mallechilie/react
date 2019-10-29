import React from "react";


const userInput = props => {
    return (
        <div className="UserInput">
            <input type="text" onChange={props.stateHandler} value={props.userName} style={props.style}/>
        </div>
    )
}

export default userInput;