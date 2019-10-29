import React from "react";
import "./UserOutput.css"

const UserOutput = props => {
    return (
        <div className="UserOutput">
            <p>Name = {props.userName}</p>
            <p>Other text.</p>
        </div>
    )
};

export default UserOutput;