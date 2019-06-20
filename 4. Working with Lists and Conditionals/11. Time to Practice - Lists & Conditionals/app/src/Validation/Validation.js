import React from 'react';

const Validation = (props) => {
    const message = (length) => {
        if (length > 5) {
            return "long";
        } else {
            return "short";
        }
    }
    return(
        <div>Text is too {message(props.length)}!</div>
    );
};

export default Validation;