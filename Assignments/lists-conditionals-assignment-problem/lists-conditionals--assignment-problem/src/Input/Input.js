import React from "react";
import Validator from "./InputValidation";

const myInput = props => {

    let state = {
        length: 0
    };

    const inputValidator = (event) => {
        this.setState({
            length: event.target.value.length
        })
    };

    return (
        <div>
            <input type="text" onChange={inputValidator}/>
            <Validator length={state.length}/>
        </div>
    );
};

export default myInput;