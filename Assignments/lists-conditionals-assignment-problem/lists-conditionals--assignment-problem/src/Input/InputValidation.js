import React from "react";

const validator = (length) => {
    return (
        length < 5 ?
            <p>Too short</p> :
            <p>Just perfect</p>
    )
};

export default validator